<template>
<div>
     <button class="delete" @click="removeitem(parseInt(msg))">DELETE</button>
    </div>
</template>
<script>

export default {
    name:'deletebutton',
    props:['msg','imageArray1'],
    data: function () {
        return{
        }
    },
    methods:{
        removeitem(index){
            this.imageArray1.splice(index,1);
            console.log(index)
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
    margin:0px 0px 10px 500px; 
    justify-content: space-between;
    float:left;
    vertical-align:bottom;
    
}
</style>