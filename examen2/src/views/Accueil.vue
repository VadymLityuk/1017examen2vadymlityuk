<template>
  <div class="home">
    <h1>
        Hello
        <span v-if="showProfile">Vadym Lityuk </span>
        !
    </h1>
    <p v-if="!showProfile">Hello my prjct</p>
    <div v-if="showProfile" class="profile">
        <p><strong>Nom:</strong>Vadym Lityuk</p>
        <p><strong>Age:</strong> 28 ans</p>
        <p><strong>Profession:</strong> Front-end Dev</p>
        <p><strong>Passe-temps:</strong> Dessin</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data() {
      return {
          showProfile: false,
      }
  },
  created() {
    let loggedIn = false;
  
    if (loggedIn) {
        this.showProfile = true;
        console.log(this.showProfile);
    }
  }
}
</script>

<style scoped>
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
}
</style>