<template>
<div id="app">
  
    <Header/>
     <nav>
      <router-link v-for="(item, i) in menuItems" :key="i" :to="item.path">{{ item.name }}</router-link>
    </nav>
      <Accueil/>
     
    <router-view />
       <Footer/>
  </div>


</template>

<script>
//import MainPage from './components/MainPage.vue'
import Accueil from './views/Accueil.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {Accueil,Header,Footer
  },
  data() {
    return {
      menuItems: [
        {
          name: "Accueil",
          path: "/",
        },
        {
          name: "Project",
          path: "/project",
        },
        {
          name: "Contact",
          path: "/contact",
        }
      ]
    }
  }
    
}
</script>

<style>


</style>
