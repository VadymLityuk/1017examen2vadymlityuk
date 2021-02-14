<template>
<div id="app">
  
    <Header/>
    <Accueil  v-if="showProfile"/>
    <Profile v-if="showAccueil" />
    <router-view />
       <Footer/>
  </div>


</template>

<script>
//import MainPage from './components/MainPage.vue'
import   {mixinTranslations}  from "./mixins/mixinTranslations";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Accueil from './views/Accueil.vue';
import Profile from './views/Profile.vue';
export default {
   mixins: [mixinTranslations],
  name: 'App',
  components: {Header,Footer,Accueil,Profile
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
