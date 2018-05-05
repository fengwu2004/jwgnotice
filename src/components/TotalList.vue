<template>
  <div class="main">
    <div v-cloak v-if="msgList.length > 0">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false" infinite-scroll-distance="50">
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
    <div v-if="nodata" class="nodata">
      <span class="simile"></span><div>亲，暂无任何消息</div>
    </div>
    <div v-if="networkerror" class="nodata">
      <span class="simile"></span><div>亲，暂无任何消息</div>
    </div>
  </div>
</template>

<script>

  import NoticeCell from '@/components/NoticeCell'
  import { queryMsgList } from "@/api/message"
  import { getQueryString } from "@/utils/common"

  export default {
    components: { NoticeCell },
    mounted() {

      this.userId = getQueryString('userId')

      this.token = getQueryString('token')

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

        this.getList(this.pageIndex, this.pageSize, res => {

          this.msgList = this.msgList.concat(res.msgList)

          if (res.msgList.length < this.pageSize) {

            this.allLoaded = true
          }

          this.pageIndex = res.pageIndex

          this.loading = false
        })
      },
      loadTop() {

        this.pageIndex = 1

        this.getList(this.pageIndex, this.pageSize, res => {

          this.msgList = res.msgList

          this.pageIndex = res.pageIndex

          this.allLoaded = false

          if (this.msgList.length == 0) {

            this.nodata = true
          }

          this.$refs.loadmore.onTopLoaded();
        })
      },
      handleTopChange(status) {

        this.topStatus = status;
      },
      selectMessage(msg) {

        return

        let route = {name:'messagedetail', params: { msgId:msg.msgId }}

        this.$router.push(route)
      },
      getList(pageIndex, pageSize, successCallback, errorCallback) {

        let data = {

          pageSize:pageSize,
          pageIndex:pageIndex
        }

        queryMsgList(data)
          .then(response => {

          successCallback && successCallback(response.data)
        })
          .catch(res => {

            errorCallback && errorCallback(res)
          })
      },
    },
    data () {
      return {
        nodata:false,
        loading:false,
        pageSize:20,
        pageIndex:1,
        msgList:[],
        allLoaded:false,
        topStatus: '',
        networkerror:false
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

  .simile {

    margin-right: 0.5rem;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url("/static/simile-icon.png") no-repeat center/100%;
  }

  .nodata {

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
