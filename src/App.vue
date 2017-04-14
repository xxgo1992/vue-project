<template id='abc'>
  <div id="app">
    <topNav :user='user' @reverseFun='reverseName'>
      <!-- <p>a</p>
      <p>b</p>
      <p slot='c'>c</p> -->
    </topNav>
    <sidebar></sidebar>
    <router-view></router-view>
    <!-- <div v-bind:class={layout:1}></div> -->
  </div>
</template>

<script>
import topNav from './component/top.vue'
import sidebar from './component/sidebar.vue'
export default {
  name: 'app', //the element inside template 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:'Emily'
    }
  },
  components:{topNav ,sidebar},
  methods:{
    reverseName(){
      this.user = this.user.split('').reverse().join('')
    }
  }
}
</script>

<style>
body{
  background: green
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
body{
  height: 1000px;
  position: relative;
}

</style>
