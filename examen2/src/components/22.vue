<!--MainPage.vue/ Page pour test jest-->
<!--Vadym Lityuk 25 février 2021-->


<template>
  <div class="main-page">
    <h1>
     Test
    </h1>
    <button type="button" class="btn btn-outline-light" @click="$router.push({ name: 'accueil' })">Test Page</button>
  </div>
</template>

<style lang="css" scoped>
  .main-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
  }
    h1 {
      color: #ffffff;
      font-size: 70px;
      margin-bottom: 20px;
    }
  
</style>
