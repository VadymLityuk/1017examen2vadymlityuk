


import MainPage from '../src/components/MainPage.vue'
import Accueil from '../src/components/Accueil.vue'
///import Footer from '../src/components/Footer.vue'
import VueRouter from 'vue-router'
//import AllFilmsPage from '../pages/AllFilmsPage'
//import FilmPage from '../pages/FilmPage'
//import NotFound from '../pages/404'
//import FilmsLayout from '../pages/FilmsLayout'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/Accueil',
      name: 'accueil',
      component: Accueil,
     
    },
  ]
})
