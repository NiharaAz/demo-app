
<template>
<div>
    <div v-for="(element,index) in listarray2"  :key="index"> 
    {{element}} 
    <cancel :listArray1="listarray2" :msg="index"> </cancel>
    </div>
    <p>{{msg}}</p>
    
</div>
</template>

<script>
import cancel from './cancel.vue';
export default
{
    components:{cancel},
    props:['listarray2','msg'],
    data:function(){
        return{

        }
    }
}
</script>

<style>
.todoitem{
    margin-bottom: 12px;
    display: flex;
    align-items:center;
    margin-left:30px;
    text-align: center;
    
}

.item{
    width: 600px;
    padding: 8px 18px;
    font-size: 18px;
  
    
}
</style>