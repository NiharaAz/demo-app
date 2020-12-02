import Vue from 'vue'
import store from './store/index.js';

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import HomePage from './HomePage.vue'
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

const router=new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  render: h => h(HomePage),
  store,
  router,
}).$mount('#app')
