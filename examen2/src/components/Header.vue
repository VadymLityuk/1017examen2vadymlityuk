<template>
  <header>
    <div class="container">
      <router-link
        :to="{ name: 'main' }"
        class="logo"
      >
       Accueil
      </router-link>
     
     
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>

<style lang="css" scoped>
header {
  background-color: hsl(0, 0%, 15%);
}
  .container {
    margin-top: 0;
    display: flex;
    align-items: baseline;
  
  padding: 20px 0;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    color: #ffffff;
    font-size: 25px;
  }
  .logo {
    color: #EB5804;
    font-size: 30px;
  }
  .links {
    margin-left: 75px;
    display: flex;
    flex-grow: 1;
  }
  button {
    margin-left: auto;
  }

</style>
