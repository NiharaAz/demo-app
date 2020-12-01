<template>
    <div>
        <input class="item" type="text" v-model="newitem1" 
        placeholder="grocery item" @keyup.enter='addTodo'>
    </div>
</template>

<script>
export default {
    props:['itembarlist','newitem1'],
    method:{
         addTodo(){
            this.itembarlist.push(this.newitem1);
            this.newitem1=""
    }
    }
    
}
</script>

<style>
.item{
    width: 600px;
    padding: 8px 18px;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: left;
}

</style>