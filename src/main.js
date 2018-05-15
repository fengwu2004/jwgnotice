// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './mock' // simulation data
import 'mint-ui/lib/style.css'

import { Loadmore, InfiniteScroll, Spinner } from 'mint-ui';

Vue.config.productionTip = false

Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);
Vue.use(InfiniteScroll);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
