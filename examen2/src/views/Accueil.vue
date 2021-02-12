<template>
  <div>
      <Profile v-if="showProfile" name='profile'/>
  <a> <span class="far__label">WELCOME__</span></a> 
  </div>
</template>

<script>
import Profile from '../views/Profile.vue'
import   {mixinTranslations}  from "../mixins/mixinTranslations";

export default {
   mixins: [mixinTranslations],
  name: 'Accueil',

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
    max-width: 500px;
    margin: 0 auto;
}
</style>