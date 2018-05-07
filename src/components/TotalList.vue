<template>
  <div class="main">
    <div v-cloak v-if="msgList.length > 0 && !networkerror">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false" infinite-scroll-distance="50">
          <notice-cell v-for="item in msgList" v-bind:key="item.msgId" :item="item" @top-status-change="handleTopChange" @select="selectMessage(item)"></notice-cell>
        </div>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
        <div v-show="loading" class="page-infinite-loading">
          <div>
            <mt-spinner type="fading-circle"></mt-spinner>
          </div>
          <span>加载中...</span>
        </div>
      </mt-loadmore>
    </div>
    <div v-if="nodata" class="nodata" @click="loadTop">
      <div class="simile"></div><div>亲，暂无任何消息</div>
    </div>
    <div v-if="networkerror" class="nodata" @click="loadTop">
      <div class="networkerror"></div><div>{{ errormsg }}</div>
    </div>
  </div>
</template>

<script>

  import { Indicator } from 'mint-ui';
  import NoticeCell from '@/components/NoticeCell'
  import { queryMsgList } from "@/api/message"
  import { getQueryString } from "@/utils/common"

  const networkerrormsg = '网络开了小差，请点击重试'

  export default {
    components: { NoticeCell },
    mounted() {

      document.title = '所有内部通知'

      let u = navigator.userAgent

      this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

      this.userId = getQueryString('userId')

      this.token = getQueryString('token')

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      this.loadTop()
    },
    methods:{
      loadMore() {

        if (this.allLoaded) {

          this.loading = false

          return
        }

        this.loading = true

        this.pageIndex += 1

        this.getList(this.pageIndex, this.pageSize).then(res => {

          this.msgList = this.msgList.concat(res.msgList)

          if (res.msgList.length < this.pageSize) {

            this.allLoaded = true
          }

          this.pageIndex = res.pageIndex

          this.loading = false

        }).catch(() => {

          this.networkerror = true
        })
      },
      loadTop() {

        this.networkerror = false

        this.nodata = false

        this.pageIndex = 1

        this.getList(this.pageIndex, this.pageSize).then(res => {

          Indicator.close()

          this.networkerror = false

          this.msgList = res.msgList

          this.pageIndex = res.pageIndex

          this.allLoaded = false

          if (res.msgList.length < this.pageSize) {

            this.allLoaded = true
          }

          if (this.msgList.length == 0) {

            this.nodata = true
          }

          console.log(this)

          if (this.$refs.loadmore) {

            this.$refs.loadmore.onTopLoaded();
          }

        }).catch(res => {

          console.log(res)

          Indicator.close()

          if (res.data) {

            this.errormsg = res.data.message
          }

          this.networkerror = true
        })
      },
      handleTopChange(status) {

        this.topStatus = status;
      },
      selectMessage(msg) {

        console.log(msg.msgId)

        if (!this.isAndroid) {

          if (window.webkit) {

            window.webkit.messageHandlers.onMessageClick.postMessage({msgId:msg.msgId})
          }
        }
        else {

          if (window.android) {

            window.android.onMessageClick(msg.msgId)
          }
        }
      },
      getList(pageIndex, pageSize) {

        this.errormsg = networkerrormsg

        let data = {

          userId:this.userId,
          token:this.token,
          pageSize:pageSize,
          pageIndex:pageIndex
        }

        return new Promise((resolve, reject) => {

          queryMsgList(data)
            .then(res => {

              if (res.data.resultCode == '0') {

                resolve(res.data)
              }
              else {

                reject(res)
              }
            })
            .catch(res => {

              reject(res)
            })
        })
      },
    },
    data () {
      return {
        isAndroid:false,
        nodata:false,
        loading:false,
        pageSize:20,
        pageIndex:1,
        msgList:[],
        allLoaded:false,
        topStatus: '',
        networkerror:false,
        errormsg:'网络开了小差，请点击重试'
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">

  .main {

    width: 100%;
    height: 100%;
  }

  .simile, .networkerror {

    display: inline-block;
    width: 4rem;
    height: 4rem;
    margin-bottom: 2rem;
    background: url("../assets/simile-icon.png") no-repeat center/100%;
  }

  .networkerror {

    background: url("../assets/networkerror.png") no-repeat center/100%;
  }

  .nodata {

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{

      color:#96969F;
      font-size: 0.8rem;
    }
  }

  .mint-spinner {
    display: inline-block;
    vertical-align: middle;
  }

  .mint-loadmore-top {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

      .is-rotate {
        transform: rotate(180deg);
      }
    }
  }

  .page-infinite-loading {
    text-align: center;
    height: 50px;
    line-height: 50px;

    div {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }
  }



</style>
