<template>
  <form class="contact">
    <h2>Contact</h2>
    <input type="text" name="lastname" placeholder="Nom" />
    <input type="text" name="firstname" placeholder="Prenom" />
    <input type="text" name="email" placeholder="Courriel" />
    <select class="sel" name="categorie">
        <option v-for="(subject, i) in dropdown" :key="i"> {{ subject }}</option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'Projet',
  data() {
      return {
          dropdown: [
              "Informations",
              "Targets",
              "Logg"
          ]
      }
  }
}
</script>

<style scoped>


h2 {
  
    font-family: Tomorrow, sans-serif;
     background-color: var(--colors-primary--700);
  color: var(--colors-on_primary--500);
  font-size: .95rem;
  display: inline-block;
  padding: 0.125em 0.75em;
  padding-right: 2em;
  letter-spacing: 0.065em;
  line-height: 1;
  text-transform: uppercase;
  clip-path: polygon(
    0.25em 0,
    calc(100% - 1em) 0,
    100% 100%,
    0.33em 100%,
    0 100%,
    0 0.25em
  );
}
    form {
       width: 30%;
    height: 100%;
    padding: 30px;
    border: 2px var(
        --colors-primary--600);
    margin: 10% 35%;

  
  }
  form .control{

    background-color: var(--colors-bg--300);
  border: 1px solid var(--colors-primary--600);
  clip-path: var(--ui-notch-path);
  padding-right: 0.5rem;
  }
  
 
  
  input {
   background-color: transparent;
  border: 0;
  box-shadow: none;
  color: var(--colors-primary--500);
  font-family: var(--fonts-primary);
  font-size: 1rem;
  letter-spacing: 0.045em;
  outline: none;
  padding: 0.5rem;
  resize: none;
  width: 100%;
    }
    
  input[type="text"] {
     background-color: var(--colors-bg--300);
  border: 1px solid var(--colors-primary--600);
  clip-path: var(--ui-notch-path);
  padding-right: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #000;
  }

  .sel{
     font-family: Tomorrow, sans-serif;
     background-color: var(--colors-primary--700);
  color: var(--colors-on_primary--500);
  display: inline-block;
  text-transform: uppercase;
  clip-path: polygon(
    0.25em 0,
    calc(100% - 1em) 0,
    100% 100%,
    0.33em 100%,
    0 100%,
    0 0.25em
  );
    border: 1px solid #473939 ;
    border-bottom: 1px solid #473939;
    text-transform: uppercase;
  }
  
</style>