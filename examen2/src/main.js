
//import router from '../router/index'

//import VueRouter from 'vue-router'

//Vue.use(VueRouter)

import '@/assets/styles/main.css';


 // router

 import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')