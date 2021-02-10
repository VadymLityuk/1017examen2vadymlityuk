<template>
  <form class="contact">
    <h2>Contact</h2>
    <input type="text" name="lastname" placeholder="Nom" />
    <input type="text" name="firstname" placeholder="Prenom" />
    <input type="text" name="email" placeholder="Email" />
    <select name="categorie">
        <option v-for="(subject, i) in dropdown" :key="i"> {{ subject }}</option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'Projet',
  data() {
      return {
          dropdown: [
              "Informations",
              "Targets",
              "Logg"
          ]
      }
  }
}
</script>

<style scoped>
.contact {
    background-color: rgb(78, 78, 78);
    padding: 2rem;
    margin: 2rem 0;
    text-align: left;
}
</style>