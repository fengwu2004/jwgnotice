<template>
  <div @click="handleClick" class="noticecell">
    <div class="maincontent">
      <span class="text">{{content}}</span>
      <img class="icon" style="width: 80px;height: 80px" width="80" height="80" v-show="icon" :src="icon"/>
    </div>
    <div class="date">{{date}}</div>
    <div class="line"></div>
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

        if (text.length > 30) {

          return text.substring(0, 30) + '...'
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

  .line {

    height: 1px;
    background: #D9D9DD;
    margin-left: 1rem;
    width: calc(100% - 1rem);
  }

  .noticecell {

    height: 7rem;
    position: relative;
  }

  .maincontent {

    height: 80px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .text {

    font-size: 1rem;
  }

  .icon {

    border-radius: 3px;
    margin-left: 1rem;
    align-self: center;
  }

  .date {

    position: absolute;
    font-size: 0.8rem;
    padding-left: 1rem;
    bottom: 0.5rem;
  }

</style>
