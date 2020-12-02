<template>
    <div> 
        <h2 style="margin-top:30px"> Shopping list  </h2>
       
        <img src="@/assets/list.jpg" alt="Registration Form" >
        <input class="item" type="text" v-model="newitem" placeholder="grocery item" @keyup.enter='addTodo'>
        <testinput :listarray2="list"></testinput>
    </div>
</template>


<script>
import testinput from './testinput.vue';

export default
  {
    components:{testinput},
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
    margin-top: 300px;
    display:inline-block;
    
}
.img {
  width: 40px;
  height:49px;
  display:flex;
  margin-top:80px;

  
}
.item{
    width: 600px;
    padding: 8px 18px;
    font-size: 18px;
    margin-bottom: 30px;
    margin-top:50px;
    display:flex;
    
}
.todoitem{
    margin-bottom: 12px;
    display: flex;
    align-items:center;
    margin-left:30px;
    text-align: center;
    
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