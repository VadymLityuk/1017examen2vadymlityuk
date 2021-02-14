<template>
  <div class="project">
      <h1> {{"myProjects" | translateTo(language)}}</h1>
    <div>
      
     <ul>       
        <button class="btn " v-for="(projet, i) in projets" :key="i"> <a :href="projet.link" target="_blank"  > {{ projet.name | translateTo(language)}}</a> </button>
    </ul>
        <button v-for="(project, i) in projects" :key="i"> {{ project }}</button>
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

#posters, #descriptions, #names {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
}

.btn {
  width: 230px;
  height: 60px; 
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-family: Tomorrow, sans-serif;
  border: 1px solid #9c3230;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn__content {
  align-items: center;
  justify-content: center;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: var(--yellow-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn--secondary {
  background-color: var(--white-color);
}

.btn--secondary .btn__content {
  background-color: var(--red-color);
  color: var(--white-color);
}

.btn__label {
  font-size: .40rem;
  position: absolute;
  bottom: -1px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--yellow-color);
  z-index: 3;
  border-left: 1px solid var(--blue-color);
}

.btn--secondary .btn__label {
  background-color: var(--white-color);
  color: var(--black-color);
}

.btn__glitch {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--yellow-color);
  filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3) drop-shadow(2px 1px #02d8f3);
}

.btn--secondary .btn__glitch {
  background-color: var(--red-color);
  border: 0 2px 2px 2px var(--blue-color);
}

.btn:hover .btn__glitch,
.btn:hover .btn__content::after,
.btn:focus .btn__glitch,
.btn:focus .btn__content::after {
  display: block;
  animation: glitch-animation 2s linear 0s infinite;
}


#names { height: 5%; }
#descriptions { height: 25%; }
#posters { height: 56%; }

</style>