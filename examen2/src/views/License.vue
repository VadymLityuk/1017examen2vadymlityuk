<template lang="html">

  <div class="mylicnese">  
    

<h2>GNU General Public License v3.0</h2>
<p>  VadymLityuk/1017examen2vadymlityuk is licensed under the</p>
<p>Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.</p>

   <button  class="btn "  >
                    <a target="_blank" href="https://github.com/VadymLityuk/1017examen2vadymlityuk/blob/main/LICENSE" >  Voir la licence </a>
                     
                          </button>
  
  
  </div>
</template>

<script lang="js">
   export default {
       data() {
           return {
           };
       },
       
   }
</script>
<style>


.btn {
  width: 230px;
  height: 60px; 
  border: 0;
  outline: none;
  background-color: var(--yellow-color);
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn__content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: var(--yellow-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
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

h2 {
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  font-weight: lighter;
  font-size: 1.25em;
  letter-spacing: 2px;
  padding-left: 5px;
  color:  var(--colors-secondary--500);
  margin-top: 1%;
}

</style>
