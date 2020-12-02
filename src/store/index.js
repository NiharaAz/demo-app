import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        imageArray:
        ["/weather1.jpg","/weather2.jpg","/weather3.png","/weather.jpg"],
        grocerylist: [],
        newitem:"",
        message:''
    },
    getters:{
        getimageArray(state){
            return state.imageArray;
        },
        message(state){
            return state.message;

        }
        /*getnewitem(state){
            return state.newitem;
        }*/
    },
    mutations:{
        removeimage(state,data){
            console.log(data.msg);
            state.imageArray.splice(parseInt(data.msg),1);
            
        },
        updateMessage(state,data){
            state.newitem=data.newitem;
            console.log(data.newitem)
        },
        addtodo(state,data){
            state.grocerylist.push(data)

        }

    },
    actions:{
        removeimage(context,data){
            context.commit('removeimage',data);
        },
        addtodo(context,data){
           context.commit('addtodo',data); 
        }
    }
})