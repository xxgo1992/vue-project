<template>
  <div class="layout">
    <div class="pannel">
      <a href="" id="yes">yes</a>
      <a href="" id="no">no</a>
    </div>
  </div>
</template>
<script>
  export default{
    name:'layout'
  }
</script>
<style>
  .layout{
    background: #000;
    opacity: 0.75;
    width:100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: none
  }
  .pannel{
    width: 200px;
    height: 80px;
    z-index:100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin:auto;
    background: #fff
  }
</style>