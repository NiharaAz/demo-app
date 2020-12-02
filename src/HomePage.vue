<template>
  <div id="app">
    <router-link to='/list' style="font-size:20px;"> Shopping list </router-link>
    <br>
    <router-link to='/weatherlist' style="font-size:20px;" > Weather list </router-link>
    <br>
     <router-link to='/demo' style="font-size:20px;" > With Vuex</router-link>
    <router-view>
    </router-view>
    
  </div>
</template>

<script>


export default {
  name: 'HomePage',
  components: {
   
    
  }
}
</script>

<style>
#app {
 font-family:"Times New Roman";
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 50px;
  
}

</style>
