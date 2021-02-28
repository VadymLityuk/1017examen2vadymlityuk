
<!--App.vue/ Page d'application generale-->
<!--Vadym Lityuk 25 février 2021-->



<template>
<div id="app">
  
    <Header/>
    <Profile v-if="showProfile" />
    <router-view />
       <Footer/>
  </div>


</template>

<script>
//import MainPage from './components/MainPage.vue'
import   {mixinTranslations}  from "./mixins/mixinTranslations";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Profile from './views/Profile.vue';
export default {
   mixins: [mixinTranslations],
  name: 'App',
  components: {Header,Footer,Profile
  },
  data() {
    return {
      loggedIn: false,
        showAccueil: false,
        showProfile: false,
     
    }
  },

   created() {
      if(this.loggedIn){
        this.showAccueil=false;
        this.showProfile=true;
      } else{
        this.showProfile=false;
        this.showAccueil=true;
      }
  },
    
}
</script>

<style>


</style>
