<template>
    <div>
        <h1> Supermarkets </h1>
        <img src="@/assets/mart1.jpg" @click="NavigateTo">
        <h4> WestCoast mart </h4>
        <img src="@/assets/mart2.jpg" @click="NavigateCentral">
        <h4> Central supermarket</h4>
        <img src="@/assets/mart3.jpg" @click="NavigateABC">
        <h4> ABC mart </h4>
        <div >
           <img v-for="img in imgArray" :key="img" v-bind:src="img" @click="removeitems(img)">
                <p v-show="a" >{{img}}</p>
                    <button text="delete" class="delete">
                    </button>
                     <button text="delete" class="delete">
                    </button>
                       <button class="close" type="button" >&times;
                    </button>
                
            
        </div>
        <br><br><br><br>
        <router-view> </router-view>
        
        
        
    </div>
</template>

<script>

export default {
    name:'sm',
    data: function () {
        return{
            a:false,
            imgArray:[
            
                "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
                "@/assets/logo.png",
                "https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"    
            
            ]
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
        },
        removeitems(img){
            this.a=true;
            console.log(img);
            alert("hi");

        }
        
    
}
}
</script>

<style scoped>
.delete{
    width:100px;
    height:30px;
    margin-left: 80px;
    
}
h1{
    text-align: left;
    margin-top: -30px;
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
</style>