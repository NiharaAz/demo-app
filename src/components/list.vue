<template>
    <div>
         
        <h2> Shopping list  </h2>
        <img src="@/assets/list.jpg" alt="Registration Form" >
        <input class="item" type="text" v-model="newitem" placeholder="grocery item" @keyup.enter='addTodo'>
        <div v-for="(element,index) in list" :key="element" class="todoitem">
            <input class="checkbox" type="checkbox"> {{element}}
            <div class="remove-item" @click="removeitem(index)"> &times;
            </div>
            </div>
        
        
        

    </div>
</template>

<script>
export default {
    name:'brazil',
    data: function () {
        return{
            newitem:"",
            id:1,
            completed:false,
            check: 'true',
            list:[
        
            ]

        }
        
    },
    methods: {
        addTodo(){
            this.list.push(this.newitem);
            //this.id=this.id+1;
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