<template>
  <div>
    <div class="bigtitle">
      <div class="left">
        <div class="icon"></div><div style="font-weight: bolder">内部通知</div>
      </div>
      <div class="right">
        <div class="history">历史</div><div class="rightarrow"></div>
      </div>
    </div>
    <notice-cell v-for="item in messages" v-bind:key="item.id" :item="item"></notice-cell>
  </div>
</template>

<script>

  import NoticeCell from '@/components/cell'

  export default {
    components: { NoticeCell },
    name: 'NoticeList',
    data () {
      return {
        messages: [
          {
            text:'随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步',
            icon:'/static/timg.jpeg',
            date:'2018-04-11 19:43',
            id:'0'
          },
          {
            text:'随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步',
            date:'2018-04-11 19:43',
            id:'1'
          },
          {
            text:'随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步',
            icon:'http://cdn.alloyteam.com/assets/img/qq-71f7f2.gif',
            date:'2018-04-11 19:43',
            id:'2'
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">

  .icon {

    width: 0.8rem;
    height: 0.8rem;
    background: url('../assets/message.png') no-repeat center/100%;
    margin-right: 0.5rem;
  }

  .bigtitle {

    display: flex;
    justify-content: space-between;
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
  }

</style>
