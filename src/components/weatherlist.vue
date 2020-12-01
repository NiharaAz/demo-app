<template>
    <div>
        <h1> Weather </h1> 
           <div v-for="(image1,index) in imageArray1" :key="index">
               <img  :src="image1">
               <deletebutton :msg="index" :imageArray1="imageArray1"> </deletebutton>
            </div>
        <br><br><br><br>
      <router-view> </router-view>  
    </div>
    
</template>

<script>

import deletebutton from './deletebutton'
export default {
  components: { deletebutton },
    name:'weather',
    props:[],
    data: function () {
        return{
            messageparent:"hi from parent",
            imageArray1:[
                 "/weather.jpg",
                 "/weather1.jpg",
                 "/weather2.jpg",
                 "weather3.png"
            ],
        }
        
    },
    methods: {
       
        NavigateTo(){
            this.$router.push("/sm/westcoast");
        },
        NavigateCentral(){
            this.$router.push("/sm/central");
        },
         NavigateABC(){
            this.$router.push("/sm/ABC");
        }
}
}
</script>

<style scoped>

h1{
    text-align: center;
    margin-left:-400px;

}

img{
    height:140px;
    width:130px;
    justify-content: space-between;
    display:inline-block;
    margin-top:20px;
    margin-left:600px;
    margin-right:100px;
    float:center;
    vertical-align:bottom;
     display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>