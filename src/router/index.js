import Vue from 'vue'
import Router from 'vue-router'
import NoticeList from '@/components/NoticeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'noticelist',
      component: NoticeList
    }
  ]
})
