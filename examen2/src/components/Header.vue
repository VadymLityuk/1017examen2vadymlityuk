<template>
  <header>
    <ul>
     <nav v-for="item in menu" :key="item.id+item.name">   
          <router-link v-if="item.name==='about'" style="float:right" class="link" :to="{path:item.name}"  tag="a">{{item.name | translateTo(language)}}</router-link>
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
        menu: [
              {id:1, name: 'home'},
              {id:2, name: 'projects'},
              {id:3, name: 'contact'},

              
        ],
         menuItems: [
        {
          name: "HOME",
          path: "/",
        },
        {
          name: "Projects",
          path: "/projects",
        },
        {
          name: "Contact",
          path: "/contact",
        }
      ]
      }
    
    }
}
</script>

<style lang="css" scoped>


</style>
