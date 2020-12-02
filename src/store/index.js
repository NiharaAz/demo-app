import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        imageArray:
        ["/weather1.jpg","/weather2.jpg"]
    },
    getters:{
        getimageArray(state){
            return state.imageArray;
        }
    },
    mutations:{
        addimage(state,data){
            console.log(data.index);
            state.imageArray.splice(parseInt(data.index),1);
            
        }

    },
    actions:{
        addimage(context,data){
            context.commit('addimage',data);
        }
    }
})