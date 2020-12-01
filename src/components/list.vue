<template>
    <div> 
        <h2> Shopping list  </h2>
        
        <img src="@/assets/list.jpg" alt="Registration Form" >
        <!-- <itembar :newitem1='newitem' :itembarlist="list" ></itembar> -->
        <input class="item" type="text" v-model="newitem" placeholder="grocery item" @keyup.enter='addTodo'>
        <div v-for="(element,index) in list" :key="index" class="todoitem">
             {{element}}
            <cancel :msg="index" :listArray1="list"></cancel>
            </div>
    </div>
</template>


<script>
//import itembar from './itembar.vue';
import cancel from "./cancel.vue";


export default
  {
    components:{cancel},
    props:[],
    data: function () {
        return{
            newitem:"",
            list:[
        
            ]
        }  
    },
    methods: {
        addTodo(){
            this.list.push(this.newitem);
            this.newitem=""
    },
    removeitem(index){
        this.list.splice(index,1);
        console.log(index)
    } 

}
}
</script>

<style>
.h2{
    text-align: left;
}
.img {
  width: 10px;
  height:10px;
  margin-top:-50px; 
  margin-left:-50px;
  float:left;
}
.item{
    width: 600px;
    padding: 8px 18px;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: left;
}
.todoitem{
    margin-bottom: 12px;
    display: flex;
    align-items:center;
    margin-left:30px;
    text-align: center;
    
}
.checkbox{
    margin-left: 30px;
    align-items: center;
    
}
.remove-item{
    cursor:pointer;
    margin-left: 100px;
    
   
}
 .remove-item :hover {
        color:black;
        margin-right:100px
    }
</style>