<template>
  <div @click="handleClick" class="noticecell">
    <div class="maincontent">
      <span class="text">{{content}}</span>
      <img class="icon" width="80" height="80" v-show="icon" :src="icon"/>
    </div>
    <div class="date">{{date}}</div>
  </div>
</template>

<script>

  import { getDateStr } from "@/utils/common"

  export default {
    computed:{
      content() {

        let text = this.item.msgSubject

        if (this.item.summary) {

          text += '---' + this.item.summary
        }

        if (text > 50) {

          return text.substring(0, 50) + '...'
        }

        return text
      },
      date() {

        return getDateStr(this.item.createTime)
      },
      icon() {

        return this.item.imageUrl
      }
    },
    props:['item'],
    name:'NoticeCell',
    methods:{
      handleClick() {

        this.$emit('select', this.item.id)
      }
    }
  }

</script>

<style scoped rel="stylesheet/scss" lang="scss">

  .noticecell {

    border-bottom: 1px solid #D9D9DD;
    height: 7rem;
    position: relative;
  }

  .maincontent {

    margin-top: 1rem;
    height: 5rem;
    display: flex;
    justify-content: space-between;
  }

  .text {

    font-size: 1rem;
    margin-right: 1rem;
  }

  .icon {

    border-radius: 5px;
    margin-left: 1rem;
    margin-right: 1rem;
    align-self: center;
  }

  .date {

    position: absolute;
    font-size: 0.8rem;
    left: 0;
    bottom: 0.5rem;
  }

</style>
