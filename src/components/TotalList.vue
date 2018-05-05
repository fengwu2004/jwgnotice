<template>
  <div class="main">
    <div v-cloak v-if="msgList.length > 0">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div>
          <notice-cell v-for="item in msgList" v-bind:key="item.msgId" :item="item" @top-status-change="handleTopChange" @select="selectMessage(item)"></notice-cell>
        </div>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
    <div v-else class="nodata">
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
    name: 'TotalList',
    mounted() {

      this.userId = getQueryString('userId')

      this.token = getQueryString('token')

      this.loadTop()
    },
    methods:{
      loadTop() {

        this.getList(this.pageIndex, this.pageSize, response => {

          this.msgList = response

          this.$refs.loadmore.onTopLoaded();
        })
      },
      loadBottom() {

        this.getList(this.pageIndex + 1, this.pageSize, response => {

          this.msgList = response

          this.$refs.loadmore.onBottomLoaded();
        })
      },
      handleTopChange(status) {

        this.moveTranslate = 1;

        this.topStatus = status;
      },
      handleBottomChange(status) {

        this.bottomStatus = status;
      },
      upCallback(page) {

        this.getList(page.num, page.size, currPageData => {

          let value = currPageData

          this.msgList = value

        }, () => {


        })
      },
      selectMessage(msg) {

        let route = {name:'messagedetail', params: { msgId:msg.msgId }}

        this.$router.push(route)
      },
      getList(pageIndex, pageSize, successCallback, errorCallback) {

        let data = {

          pageSize:pageSize,
          pageIndex:pageIndex,
          userId:this.userId,
          token:this.token
        }

        queryMsgList(data)
          .then(response => {

          successCallback && successCallback(response.data.msgList)
        })
          .catch(res => {

            errorCallback && errorCallback(res)
          })
      },
    },
    data () {
      return {
        mescroll:null,
        pageSize:20,
        pageIndex:1,
        msgList:[],
        allLoaded:false,
        topStatus: '',
        bottomStatus: '',
        moveTranslate: 0
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">

  .icon {

    width: 1rem;
    height: 1rem;
    background: url('../assets/message.png') no-repeat center/100%;
    margin-right: 0.5rem;
  }

  .specialspan {

    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
  }

  .header {

    display: flex;
    justify-content: space-between;
    height: 3rem;
    border-bottom: 1px solid #D9D9DD;
  }

  .left, .right {

    display: flex;
    align-items: center;
  }

  .history {

    font-size: 0.8rem;
    color: #C7C7CB;
  }

  .rightarrow {

    width: 0.4rem;
    height: 0.6rem;
    background: url('../assets/rightarrow.png') no-repeat center/100%;
    margin-left: 0.5rem;
    margin-right: 1rem;
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

</style>
