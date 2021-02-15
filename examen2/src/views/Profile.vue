<template>
  <div class="prof">
    <h1>Mon profil</h1>
    <div class="infos">
       <p><strong>Nom:</strong>Vadym Lityuk</p>
        <p><strong>Age:</strong>  {{ age| translateTo(language) }}</p>
        <p><strong>Profession:</strong> Front-end Dev</p>
        <p><strong>Hobby:</strong> Dessin</p>
        <p><strong>Info:</strong> {{ info| translateTo(language) }}</p>
    </div>
  </div>
</template>

<script>
import   {mixinTranslations}  from "../mixins/mixinTranslations";


export default {
  
  mixins: [mixinTranslations],
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
  font-family: sans-serif;
  letter-spacing: 0.25px;
  font-weight: lighter;
  padding-left: 4px;
  font-size: 0.88em;
  color: var(--colors-primary--500);
  margin-top: 2%;
}

</style>