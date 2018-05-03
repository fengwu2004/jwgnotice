<template>
  <div @click="handleClick" class="noticecell">
    <div class="maincontent">
      <span class="text">{{content}}</span>
      <img class="icon" width="80" height="80" v-if="item.icon" :src="item.icon"/>
    </div>
    <div class="date">{{item.date}}</div>
  </div>
</template>

<script>

  export default {
    computed:{
      content() {
        return this.item.text
      },
    },
    props:['item'],
    name:'NoticeCell',
    methods:{
      handleClick() {

        this.$emit('selectId', this.item.id)
      }
    }
  }

</script>

<style scoped rel="stylesheet/scss" lang="scss">

  .noticecell {

    border-top: 1px solid red;
    height: 8rem;
    position: relative;
  }

  .maincontent {

    margin-top: 0.5rem;
    height: 7rem;
    display: flex;
    justify-content: space-between;
  }

  .text {


  }

  .icon {

    border-radius: 5px;
    margin-left: 2rem;
    align-self: center;
  }

  .date {

    position: absolute;
    left: 1rem;
    bottom: 0.5rem;
  }

</style>
