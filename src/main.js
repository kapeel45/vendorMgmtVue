import Vue from 'vue'
import App from './App.vue'
import Routes from './routes'
//import Ninjas from './Ninjas.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource);
Vue.use(VueRouter);

//reistering globally
//Vue.component('ninjas',Ninjas)
const router = new VueRouter({
  routes:Routes
})

//event bus 
//Desc: instead of passing values from root pass it directly
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
