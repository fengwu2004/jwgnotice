import Vue from 'vue'
import Router from 'vue-router'
import NoticeList from '@/components/NoticeList'
import MessageDetail from '@/components/MessageDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'noticelist',
      component: NoticeList
    },
    {
      path: '/detail',
      name: 'messagedetail',
      component: MessageDetail
    }
  ]
})
