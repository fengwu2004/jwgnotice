<template>
  <div class="main">
    <div class="title">{{title}}</div>
    <div class="date">{{date}}</div>
    <div class="content">{{content}}</div>a
  </div>
</template>

<script>

  import { queryMsgDetail } from "@/api/message"
  import { getQueryString } from '@/utils/common'

  export default {
    name:'MessageDetail',
    created() {

      let msgId = getQueryString('msgId')

      let userId = getQueryString('userId')

      let token = getQueryString('token')

      let routeparams = this.$route.params

      this.msgId = routeparams.msgId ? routeparams.msgId : msgId

      this.userId = routeparams.userId ? routeparams.msgId : userId

      this.token = routeparams.token ? routeparams.token : token

      console.log('aaa')

      let data = {
        msgId:this.msgId,
        userId:this.userId,
        token:this.token
      }

      queryMsgDetail(data).then(response => {

        console.log(response.data)

        let msg = response.data.msg

        this.title = msg.msgSubject

        this.content = msg.msgContent

        this.date = new Date(msg.createTime).toLocaleString()
      })
    },
    data() {
      return {
        title:'',
        date:'',
        content:'',
        userId:'',
        token:''
      }
    }
  }


</script>

<style scoped rel="stylesheet/scss" lang="scss">

  .main {

    margin: 8px;
  }

  .title {

    margin-top: 2rem;
    font-size: 2rem;
    font-weight: bolder;
  }

  .date {

    margin-top: 1rem;
  }

  .content {

    margin-top: 1rem;
  }

</style>
