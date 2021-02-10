
import router from '../router/index'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import '@/assets/styles/main.css';

new Vue({
  render: h => h(App),
  el: '#app',
  router
})
