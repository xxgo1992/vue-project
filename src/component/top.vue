<template>
    <div id="nav">
        <span id="user" v-on:click='reverseFun'>{{title}}, {{user}}, welcome to here</span>
        <nav>
            <router-link to="/home">home</router-link>
            <router-link to="/bbs">bbs</router-link>
            <router-link to="/help">help</router-link>
        </nav>
        <slot></slot>
        <slot name='c'></slot>
    </div>
</template>
<script>
  export default{
      name : 'nav',
      data(){
          return {
            title:'Hello'
          }
      },
      props:['user'],   //父子通信，父>子
      methods:{
        reverseFun(){  
          this.title = 'How are you'
          this.$emit('reverseFun') //父子通信，子>父
        }
      }
  }
</script>

<style scoped>
    #nav{
        width: 300px;
        height: 50px;
        background: yellow;
        position: fixed;
        top: 5px
    }
    #nav span{
        color:#000;
        font-weight: bold;
        line-height: 50px;
    }
    a{
        margin-right: 5px;
    }
</style>