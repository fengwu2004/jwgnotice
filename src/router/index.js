import Vue from 'vue'
import Router from 'vue-router'
import UnreadList from '@/components/UnreadList'
import TotalList from '@/components/TotalList'
import MessageDetail from '@/components/MessageDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/unreadlist',
      name: 'unreadlist',
      component: UnreadList
    },
    {
      path: '/totallist',
      name: 'totallist',
      component: TotalList
    },
    {
      path: '/detail',
      name: 'messagedetail',
      component: MessageDetail
    }
  ]
})
