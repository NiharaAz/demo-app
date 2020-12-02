<template>
<div>
     <button class="delete" @click="removeitem(msg)">DELETE</button>
    </div>
</template>

<script>
import store from "../store/index.js";
import { mapGetters } from 'vuex';
export default {
    name:'deletebutton',
    props:['msg'],
    data: function () {
        return{
        }
    },
    computed: 
    mapGetters(['getimageArray']),
    methods: {
        removeitem(msg){
            console.log(msg);
            store.dispatch("removeimage",{msg});
        }
}
}
</script>

<style>
button{
    background-color:aquamarine;
    font-size:20px;
    border-radius: 10px;
    

}

.delete{
    
    width:100px;
    height:30px;
    display:inline-block;
    margin:0px 0px 10px 600px; 
    justify-content: space-between;
    float:center;
    vertical-align:bottom;
    
}
</style>