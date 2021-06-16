<!--Footer.vue/ directives bas de page-->
<!--Vadym Lityuk 25 février 2021-->

<template>
  <footer>
     <div v-mydirective> - Footer Component-
       <a href="https://github.com/VadymLityuk/1017examen2vadymlityuk/blob/main/LICENSE">License</a>
        </div>
  </footer>
</template>

<script>
export default  {
    name: 'bas de la page',
    props: [],
    directives: {
      mydirective: {
       bind: function(el) {
        // function Bind à la directive pour l'affichage de FullYear + Copyright + mon texte
         el.innerHTML = 'Copyright © -' + new Date().getFullYear() + el.innerHTML + '- All Rights Reserved' ;
         //coluer du pied de page
        el.style.color = 'var(--colors-tertiary--500)';
      },
    },
   
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
}
}
</script>

<style scoped>
footer{
  background-color:  rgb(179, 154, 179);
  padding-top: 140px;
  visibility: hidden;
  
}

</style>