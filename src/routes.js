import list from './components/list.vue';
import smlist from './components/smlist.vue';
import westcoast from './components/westcoast.vue';
import central from './components/central.vue';
import ABCmart from './components/ABCmart.vue'

export const routes = [

{path: '/list',
component: list},

{path: '/sm',
component: smlist,
children: [{
    path:'westcoast',
    component: westcoast
},
{   path:'central',
    component:central
},
{   path:'ABC',
    component:ABCmart
}]

}]
