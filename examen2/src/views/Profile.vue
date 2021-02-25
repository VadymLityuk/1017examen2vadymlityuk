
<!--Profile.vue/ Page Profile-->
<!--Vadym Lityuk 25 février 2021-->

<!-- ici vous pouvez voir les informations qui apparaîtront sur la page Accueil
 uniquement si l'utilisateur est connecté-->

<template>
  <div class="prof">
    <h1>Mon profil</h1>
    <div class="infos">
       <p><strong>{{'firstName'| translateTo(language)}}:</strong>Vadym</p>
       <p><strong>{{'lastName'| translateTo(language)}}:</strong>Lityuk</p>
        <p><strong>Age:</strong>  {{'age'| translateTo(language)}} </p>
        <p><strong>{{'job'| translateTo(language)}}:</strong> Front-end Dev</p>
        <p><strong>{{'hobby'| translateTo(language)}}:</strong> Dessin</p>
        <p><strong>{{'informations'| translateTo(language)}}:</strong> {{'info'| translateTo(language)}} </p>
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