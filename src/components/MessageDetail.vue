<template>
  <div class="main">
    <div class="title">{{title}}</div>
    <div class="date">{{date}}</div>
    <div class="content">{{content}}</div>a
  </div>
</template>

<script>

  import { queryMsgDetail } from "@/api/message";

  export default {
    name:'MessageDetail',
    created() {

      let data = {
        msgId:this.$route.params.msgId
      }

      queryMsgDetail(data).then(response => {

        console.log(response.data)

        let msg = response.data.msg

        this.title = msg.msgSubject

        this.content = msg.msgContent

        let date = new Date(msg.createTime)

        this.date = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + '  ' + date.getHours() + ':' + date.getMinutes()
      })
    },
    data() {
      return {
        title:'',
        date:'',
        content:'',
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
