<template>
  <header>
    <div class="container">
      <router-link
        :to="{ name: 'main' }"
        class="logo"
      >
       My Projects
      </router-link>
      <div class="links">
        <router-link
          :to="{ name: '..' }"
        >
          LogIn
        </router-link>
      </div>
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
  background-color: #0c0c0c;
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
