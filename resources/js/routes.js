import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = [
    {
        path:'/secondComponent',
        name:'secondComponent',
        component:() => import(/* webpackChunkName: "routes" */ './components/control_panel/secondComponent'),
    },
];

export default new Router({
    mode:'history',
    routes
});