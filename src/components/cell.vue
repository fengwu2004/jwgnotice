<template>
  <div @click="handleClick" class="noticecell">
    <div class="maincontent">
      <div class="text">{{content}}</div>
      <div class="icon" v-if="item.icon" :style="{background:'url(' + item.icon + ')' + 'no-repeat center/ 100%'}"></div>
    </div>
    <div class="date">{{item.date}}</div>
  </div>
</template>

<script>

  export default {
    computed:{
      content() {

        return this.item.text
      }
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
    display: flex;
    justify-content: space-between;

  }

  .text {


  }

  .icon {

    width: 8rem;
    height: 8rem;
    border-radius: 5px;
  }

  .date {

    position: absolute;
    left: 1rem;
    bottom: 0.5rem;
  }

</style>
