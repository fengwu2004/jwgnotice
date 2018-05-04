<template>
  <div class="main">
    <div v-if="showBigTitle" class="bigtitle">
      <div class="left">
        <div class="icon"></div><div style="font-weight: bolder">内部通知</div>
      </div>
      <div class="right">
        <div class="history">历史</div><div class="rightarrow"></div>
      </div>
    </div>
    <div id="mescroll" class="mescroll">
      <notice-cell v-for="item in this.msgList" v-bind:key="item.msgId" :item="item" @select="selectMessage(item)"></notice-cell>
    </div>
  </div>
</template>

<script>

  import NoticeCell from '@/components/NoticeCell'
  import { queryMsgList } from "@/api/message"
  import MeScroll from 'mescroll.js'

  export default {
    components: { NoticeCell },
    name: 'NoticeList',
    created() {

      this.getList()
    },
    mounted() {

      this.mescroll = new MeScroll('mescroll', {

        up: {
          callback:this.upCallback,
        }
      })
    },
    methods:{
      upCallback(page) {

        console.log(page)
      },
      selectMessage(msg) {

        let route = {name:'messagedetail', params: { msgId:msg.msgId }}

        this.$router.push(route)
      },
      getList() {

        console.log('getList')

        let data = {

          token:"28816fb0c5d74a9fae0549fd78e46e0a",
          userId:"061a96ebdf0247918aa684b9278053e3"
        }

        queryMsgList(data).then(response => {

          console.log(response)

          this.msgList = response.data.msgList
        })
      },
    },
    data () {
      return {
        mescroll:null,
        showBigTitle:false,
        pageSize:20,
        pageIndex:1,
        msgList:[],
        isRead:false,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">

  .mescroll{
    position: fixed;
    top: 44px;
    bottom: 0;
    height: auto;
  }

  .icon {

    width: 0.8rem;
    height: 0.8rem;
    background: url('../assets/message.png') no-repeat center/100%;
    margin-right: 0.5rem;
  }

  .bigtitle {

    display: flex;
    justify-content: space-between;
    height: 2rem;
    border-bottom: 1px solid black;
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

</style>
