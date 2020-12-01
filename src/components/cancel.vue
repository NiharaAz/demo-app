<template>
<div> 
    <div @click="removeitem(parseInt(msg))" class="remove-item" > &times;
    </div>
</div>
</template>

<script>
export default {
    props:['msg','listArray1'],
    methods:{
        removeitem(index){
        this.listArray1.splice(index,1);
        console.log(index);
    } 
    }
    
}
</script>

<style>
.remove-item{
    cursor:pointer;
    margin-left: 100px;
    
   
}
 .remove-item :hover {
        color:black;
        margin-right:100px
    }

</style>