<template>
    <div id='sidebar'>
        <ul>
            <li v-for='(item, index) in limitsize' :class='{finished:item.isFinish, checked: item.isDefault}' @click='change(item)'>{{username}} {{item.title}}
                <a v-show='item.isFinish' href="" class="delete" @click.prevent='deleteItem(index)'>delete</a>
            </li>
        </ul>
        <a href="" class="more" @click.prevent='getMore'>
          <span v-if='defaultsize<items.length' class="up">↓</span>
          <span v-else class="down"></span>
        more</a>
        <div>Total Finish: {{tolitem | formatnum}}</div>
        <input type="text" @keyup.13='addItem' v-model='item' placeholder="something you want to do">{{item}}
        <!-- <div v-bind:class={layout:1}></div> -->
        <layout v-bind:class={show:isShow}></layout>
    </div>
</template>
<script>
import layout from '../component/layout.vue'
    export default{
        data(){
            return {
                username:'',
                item:'',
                defaultsize:3,
                isShow:0,
                items :[
                    {
                        title: 'yoga',
                        isFinish: false,
                        isDefault: true
                    },{
                        title: 'walking',
                        isFinish: true,
                        isDefault: false
                    },{
                        title: 'writing',
                        isFinish: false,
                        isDefault: false
                    },

                ]
            }
        },
        components:{layout},
        mounted: function(){
          this.$nextTick(function(){
            this.getDate()
          });
        },
        filters:{
          formatnum(num){
            return num>1?num+' things':num+ 'thing'
          }
        },
        computed:{
            tolitem :  function(){
                var total = 0
                this.items.forEach(function(item){
                    item.isFinish && total++
                })
                return total
            },
            limitsize : function(){
              return this.items.slice(0, this.defaultsize)
            },
        },
        methods :{
            change: function(item){
                item.isFinish = !item.isFinish
                this.items.forEach(function(v){
                  v.isDefault = false
                })
                item.isDefault = !item.isDefault
            },
            addItem : function(){
                var nitem = {}
                nitem.title = this.item
                nitem.isFinish = false
                this.items.unshift(nitem) 
                this.item = ''
            },
            deleteItem (index){
                this.items.splice(index, 1)
                this.isShow = 1
            },
            getMore:function(){
              if(this.defaultsize != this.items.length)
                this.defaultsize = this.items.length
              else {
                this.defaultsize= 3
              }
            },
            getDate(){
              var _this = this
              this.axios.get('/dist/data.json')              
              //or this.$http.get('/dist/data.json')
                .then(function (response) {
                  var data = response.data
                  _this.username = data.name
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    #sidebar{
        font-weight: bold;
        position: fixed;
        left: 2px;
        bottom: 30px;
    }
    ul{
        width: 200px;
    }
    li{
        opacity: 0.6;
        background: #000;
        height: 80px;
        color:#fff;
        font-weight: bold;
        margin: 5px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 30px;
    }
    .finished{
        text-decoration: underline;
        color: pink
    }
    .delete{
        color: red;
        position: absolute;
        right: 5px;
        text-decoration: line-through;
    }
    .checked{
      border: 3px solid #12cc21
    }
    .more{
      color: 
    }
    .show{
      display: block
    }
</style>