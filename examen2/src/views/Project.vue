<template>
  <div class="projects">
    <h2>Mes projets</h2>
    <ul>
        <li v-for="(project, i) in projects" :key="i"> {{ project }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
      return {
          projects: [
              "Overwatch",
              "Cyber",
              "Portfolio",
          ]
      }
  }
}
</script>

<style scoped>
.projects {
    background-color: rgb(43, 43, 43);
    padding: 2rem;
    margin: 2rem 0;
    text-align: right;
}
</style>