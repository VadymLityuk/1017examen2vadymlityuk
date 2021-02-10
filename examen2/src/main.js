

import VueRouter from 'vue-router'
import router from "./router";

Vue.use(VueRouter)

import '@/assets/styles/main.css';


 // router

 import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')