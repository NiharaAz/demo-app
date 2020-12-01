<template>
  <div id="app">
    <router-link to='/list'> Shopping list </router-link>
    <br>
    <router-link to='/weatherlist'> Weather list </router-link>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 50px;
}

</style>
