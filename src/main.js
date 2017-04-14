import Vue from 'vue'
import App from './App.vue'
import {firstName} from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
console.log(firstName)
new Vue({
  el: '#app1',
  data:{
    msg:'eeeeeee'
  },
  render: h => h(App) 
  //h函数仅是作为createElement函数之缩写
  //equal ；render: function(createElement){
  //   return createElement(App)
  // }
})
