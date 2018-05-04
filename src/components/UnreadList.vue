<template>
  <div class="main">
    <div class="header">
      <div class="left">
        <div class="icon"></div><div style="font-weight: bolder;font-size: 1.5rem">内部通知</div>
      </div>
      <div class="right">
        <div class="history">历史</div><div class="rightarrow"></div>
      </div>
    </div>
    <div id="mescroll" class="mescroll">
      <div v-cloak v-if="msgList.length > 0">
        <notice-cell v-for="item in msgList" v-bind:key="item.msgId" :item="item" @select="selectMessage(item)"></notice-cell>
      </div>
      <div v-else class="nodata">
        <span class="simile"></span><div>亲，暂无最新通知哦</div>
      </div>
    </div>
  </div>
</template>

<script>

  import '@/components/mescroll.min.css'

  import NoticeCell from '@/components/NoticeCell'
  import { queryMsgList } from "@/api/message"
  import MeScroll from 'mescroll.js'
  import { getQueryString } from "@/utils/common"

  export default {
    components: { NoticeCell },
    name: 'UnreadList',
    mounted() {

      var u = navigator.userAgent

      this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

      this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

      this.userId = getQueryString('userId')

      this.token = getQueryString('token')

      console.log(this.userId, this.token)

      this.mescroll = new MeScroll('mescroll', {

        up: {
          callback:this.upCallback,
        }
      })
    },
    methods:{
      upCallback(page) {

        this.getList(page.num, page.size, currPageData => {

          let value = currPageData

          this.msgList = value

          this.mescroll.endSuccess(value.length);
        }, () => {

          this.mescroll.endErr()
        })
      },
      selectMessage(msg) {

        let route = {name:'messagedetail', params: { msgId:msg.msgId }}

        this.$router.push(route)
      },
      getList(pageIndex, pageSize, successCallback, errorCallback) {

        let data = {
          isRead:false,
          pageSize:pageSize,
          pageIndex:pageIndex,
          userId:this.userId,
          token:this.token,
          isAndroid:false,
          isiOS:false,
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
        userId:'',
        token:''
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">

  [v-cloak] {
    display: none;
  }

  .mescroll{
    position: fixed;
    top: 3rem;
    bottom: 0;
    height: auto;
  }

  .icon {

    width: 1rem;
    height: 1rem;
    background: url('../assets/message.png') no-repeat center/100%;
    margin-right: 0.5rem;
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

  .main {

    margin-left: 1rem;
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

</style>
