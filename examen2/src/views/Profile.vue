<template>
  <div class="prof">
    <h1>Mon profil</h1>
    <div class="infos">
       <p><strong>Nom:</strong>Vadym Lityuk</p>
        <p><strong>Age:</strong> 28 ans</p>
        <p><strong>Profession:</strong> Front-end Dev</p>
        <p><strong>Hobby:</strong> Dessin</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.prof {
    padding: 2rem;
    min-height: 60vh;
    max-width: 1200px;
    margin: 0 auto;
}
p {
    margin: 0 auto;
    max-width: 600px;
}
</style>