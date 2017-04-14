<template>
    <div id="nav">
        <span id="user">Hello, {{user}}, welcome to here</span>
        <nav>
            <a href="#">home</a>
            <a href="#">bbs</a>
            <a href="#">about</a>
        </nav>
    </div>
</template>
<script>
    export default{
        name : 'nav',
        data(){
            return {
            }
        },
        props:['user']
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
    }
    a{
        margin-right: 5px;
    }
</style>