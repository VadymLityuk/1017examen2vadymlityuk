
<!--Accueil.vue/ Page d'accueil-->
<!--Vadym Lityuk 25 février 2021-->


<template>
  <div>
      <a> <span class="far__label">BONJOUR__</span></a> 
     <hr>
      <p>Bonjour, je suis heureux de vous accueillir sur mon site pour le projet final de Vue Js</p>
      <Profile v-if="showProfile" name='profile'/>

  </div>
</template>

<script>
import Profile from '../views/Profile.vue'
import   {mixinTranslations}  from "../mixins/mixinTranslations";

export default {
   mixins: [mixinTranslations],
  name: 'Accueil',
// simulation de Log In 
   components: {
      Profile
    },
  data() {
      return {
          showProfile: false,
      }
  },
  created() {
      let loggedIn = false;
  
      if (loggedIn) {
          this.showProfile = true;
      }
  }
}
</script>
<!--  Ici j'ajouter <style scoped>  pour ajouter le css à page d'accueil seulement -->
<style scoped>


 .far__label {
   
  font-family: Tomorrow, sans-serif;
    font-size: 15px;
    bottom: -1px;
    color:var( --colors-primary--500);
    right: 8%;
    padding: 0 5px;
    background-color: var(--colors-primary--700);
    z-index: 3;
    border-left: 1px solid var(--blue-color);
  }
  
  .far--secondary .far__label {
    background-color: var(--white-color);
    color: var(--black-color);
  }
  
.home {
    min-height: 50vh;
    max-width: 1300px;
    margin: 0 auto;
    padding: 3rem;
}
.profile {
    background-color: rgb(44, 44, 44);
    padding: 4rem 1rem;
}
p {
   font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    font-weight: lighter;
  letter-spacing: 0.25px;
  font-weight: lighter;
  padding-left: 4px;
  font-size: 1em;
  color: var(--colors-primary--500);
  margin-top: 2%;
}

  hr{
    height: 1px;
    background-color: var(--colors-primary--500);
    border: none;

  }
</style>