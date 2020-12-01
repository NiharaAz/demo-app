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

.delete{
    width:100px;
    height:30px;
    display:inline-block;
    margin:0px 0px 10px 500px; 
    justify-content: space-between;
    float:left;
    vertical-align:bottom;
    
}
h1{
    text-align: center;
    margin-top: 10px;

}
img {
display:inline-block;
  width: 120px;
  height:120px;
  margin:0px 0px 10px 500px; 
  justify-content: space-between;
  float:left;
  vertical-align:bottom;
  
  
}
h4{
    float: left;
    vertical-align: bottom;
    margin-bottom: 20px;
    justify-content: space-between;

}
.close{
    cursor:pointer;
    display: block;
        text-align: center;
        margin:30px 50px 8px 70px;
     display: flex;
  flex-direction: column;
  flex-wrap: wrap;
    float:left
}
.close :hover {
        color:black;
        justify-content: space-between;
        margin:30px 50px 50px;
        vertical-align: bottom;
         display: flex;
  flex-direction: column;
  flex-wrap: wrap;
        
    }
    .remove-item{
    cursor:pointer;
    margin-left: 100px;
    
   
}
 .remove-item :hover {
        color:black;
        margin-right:100px
    }
</style>