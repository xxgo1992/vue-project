import Vue from 'vue'
import App from './App.vue'
import {firstName} from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './component/home.vue'
import bbs from './component/bbs.vue'
import help from './component/help.vue'

// const home  = { template: '<div>home</div>' }
// const bbs   = { template: '<div>bbs</div>' }
// const help = { template: '<div>help</div>' }

const routes = [
  {path:'/home', component:home},
  {path:'/bbs', component:bbs},
  {path:'/help', component:help},
]
const router = new VueRouter({
  routes
});

//暴漏路由调试接口
window.router = router;

new Vue({
  el: '#app1',
  data:{
    msg:'eeeeeee'
  },
  // components:{
  //   App
  // },
  render: h => h(App),
  router
  //h函数仅是作为createElement函数之缩写
  //equal ；render: function(createElement){
  //   return createElement(App)
  // }
})
