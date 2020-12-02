<template>
    <div> 
        <h2 style="margin-top:30px"> Shopping list  </h2>
        <div v-for="(image,index) in getimageArray" :key="index">
            <button @click="addimage(parseInt(index))"> DELETE </button>
            <img :src="image">
             </div>
    </div>
</template>


<script>
import store from "../store/index.js";
//import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default
  {
    components:{},
    props:[],
    data: function () {
        return{
        }  
    },
    computed: 
    mapGetters(['getimageArray']),
    methods: {
        addimage(index){
            store.dispatch("addimage",{index});
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