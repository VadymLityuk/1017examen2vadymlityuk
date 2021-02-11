<template>
  <div class="project">
      <h1> {{"myProjects" | translateTo(language)}}</h1>
    <div>
      <ul >
        <a v-for="(projet, i) in projets" :key="i"> <a :href="projet.link" target="_blank"> {{ projet.name | translateTo(language)}}</a> </a>
    </ul>
        <a v-for="(project, i) in projects" :key="i"> {{ project }}</a>
    </div>
  </div>
</template>

<script>
import   {mixinTranslations}  from "../mixins/mixinTranslations";
export default {
    mixins: [mixinTranslations],
  name: 'Project',
  data() {
      return {
          projets: [
              {name:"MOVIMANIA",link:"https://vadymlityuk.github.io/AEC_Front_End/Programmation2/mania/moviemania/build/index.html?fbclid=IwAR2vaOyHFvupjj_q2CFfbjKaCIIbqP9qYl6Wj7QGfIIjgFOHcZOSs7pjJ8I#/Accueil"},
              {name:"OVERWTACH",link:"https://vadymlityuk.github.io/AEC_Front_End/Integration1/Projet%20Final/index.html"},
              {name:"Portfolio",link:"https://vadymlityuk.github.io/AEC_Front_End/Portfolio/PORTFOLIO/portfolio/index.html?fbclid=IwAR2U9Lcif5OLx-0X4UVRdoog6luowZ9rKiF5DyfJiObkZSDU3IeKFIqMJbI"},
              {name:"Spotify",link:"https://vadymlityuk.github.io/AEC_Front_End/Programmation2/spotify/quebefy/build/index.html"},
           
          ]
      }
  }
}
</script>

<style scoped>
</style>