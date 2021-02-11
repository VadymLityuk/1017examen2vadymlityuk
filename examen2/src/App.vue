<template>
<div id="app">
  
    <Header/>
   
    <router-view />
       <Footer/>
  </div>


</template>

<script>
//import MainPage from './components/MainPage.vue'
import   {mixinTranslations}  from "./mixins/mixinTranslations";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
   mixins: [mixinTranslations],
  name: 'App',
  components: {Header,Footer
  },
  data() {
    return {
      menuItems: [
        {
          name: "HOME",
          path: "/home",
        },
        {
          name: "Projects",
          path: "/projectsSS",
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
