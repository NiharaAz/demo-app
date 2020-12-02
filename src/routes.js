import list from './components/list.vue';
import weatherlist from './components/weatherlist.vue';
import withvuex from './components/withvuex.vue';

export const routes = [

{path: '/list',
component: list},

{path: '/weatherlist',
component: weatherlist
},
{path:'/demo',
component:withvuex}]
