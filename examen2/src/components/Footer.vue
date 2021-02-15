<template>
  <footer>
     <p v-mydirective> Vadym Lityuk </p>
  </footer>
</template>

<script>
export default  {
    name: 'Footer',
    props: [],
    directives: {
      mydirective: {
       bind: function(el) {
         el.innerHTML = 'Copyright © -' + new Date().getFullYear() + el.innerHTML + '- All Rights Reserved' ;
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

  padding-top: 140px;
}

</style>