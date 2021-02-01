require('./bootstrap');

window.Vue = require('vue');
import router from './routes';
Vue.component('master',require('./components/control_panel/master').default);
const app = new Vue({
    el: '#app',
    router
});