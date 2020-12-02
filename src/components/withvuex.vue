<template>
    <div> 
        <h2 style="margin-top:30px"> Shopping list  </h2>
         <input class="item" type="text" v-model="newitem" placeholder="grocery item" @keyup.enter='addTodo'>
         <input @input="updateMessage" class="item" type="text" :value='message' placeholder="test grocery item" @keyup.enter='addTodo'>
        <testinput :listarray2="list"></testinput>
        <div v-for="(image,index) in getimageArray" :key="index">
            <deletebutton :msg="index"></deletebutton>
            <img :src="image">
             </div>
    </div>
</template>


<script>
import testinput from './testinput';
import deletebutton from './deletebutton';
import store from "../store/index.js";
//import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default
  {
    components:{deletebutton,testinput},
    props:[],
    data: function () {
        return{
            newitem:"",
            list:[
        
            ]
        }  
    },
    computed: 
    mapGetters(['getimageArray','message']),
    methods: {
        removeimage(index){
            store.dispatch("removeimage",{index});
        },
         addTodo(){
            this.list.push(this.newitem);
            this.newitem=""
    },
    addtodo(){
        store.dispatch("addtodo");
    },
    updateMessage(e){
        store.commit('updateMessage',e.target.value);
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

</style>