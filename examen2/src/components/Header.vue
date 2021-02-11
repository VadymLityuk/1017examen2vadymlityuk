<template>
  <header>
    <ul>
     <nav v-for="item in menu" :key="item.id+item.name">   
          <router-link v-if="item.name==='about'" style="float:right" class="link" :to="{path:item.name}"  tag="a">{{item.name}}</router-link>
          <router-link v-else class="link" :to="{path:item.name}" tag="a">{{item.name}}</router-link>
      </nav>  
      </ul> 
 
    
  </header>
</template>

<script>
import   {mixinTranslations}  from "../mixins/mixinTranslations";


export default {
  mixins: [mixinTranslations],
  name: 'Header',
   props: [],
    data () {
      return {
        menu: [
              {id:1, name: 'Accueil'},
              {id:2, name: 'Projects'},
              {id:3, name: 'Contact'},
        ]
      }
    
    }
}
</script>

<style lang="css" scoped>


</style>
