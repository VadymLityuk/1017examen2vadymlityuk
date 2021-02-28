<!--Header.vue/ menu de navigation-->
<!--Vadym Lityuk 25 février 2021-->

<template>
  <header>
    <ul>
     <nav v-for="item in menu" :key="item.id+item.name">   
          <router-link v-if="item.name==='home'" style="float:right" class="link" :to="{path:item.name}"  tag="a">{{item.name | translateTo(language)}}</router-link>
          <router-link v-else class="link" :to="{path:item.name}" tag="a">{{item.name | translateTo(language)}}</router-link>
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
        //chaque numero indiquant id de la page
        menu: [
              {id:1, name: 'home'},
              {id:2, name: 'projects'},
                {id:3, name: 'license'},
              {id:3, name: 'contact'},

              
        ],
         menuItems: [
        {
          //Page Accueil
          name: "HOME",
          path: "/",
        },
        {
          //Page Projets
          name: "Projects",
          path: "/projects",
        },
        {
          //Page Contact
          name: "Contact",
          path: "/contact",
        },
           {
          //Page Contact
          name: "license",
          path: "/license",
        }
      ]
      }
    
    }
}
</script>

<style lang="css" scoped>


</style>
