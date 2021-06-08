<!--MainPage.vue/ Page pour test jest-->
<!--Vadym Lityuk 25 février 2021-->


<template>
  <div class="main-page">
    <h1>
  TEST MAIN Vue to Full Callendar
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
    h2 {
      color: #ffffff;
      font-size: 70px;
      margin-bottom: 20px;
    }
    h3 {
      color: #ffffff;
      font-size: 70px;
      margin-bottom: 20px;
    }
    h4 {
      color: #ffffff;
      font-size: 70px;
      margin-bottom: 20px;
    }
</style>
