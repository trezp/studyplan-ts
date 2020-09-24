<template>
    <h1>{{ msg }}</h1>
    <ul v-for="character in characters" :key="character.id">
      <li>
        <p>Name: {{character.name}}</p>
        <p>Power: {{character.power}}</p>
      </li>
    </ul>
</template>

<script>
import Characters from "../api/Characters.js";

export default {
  name: 'HelloCatra',
  props: {
    msg: String
  }, 
  data(){
    return {
      characters: null
    }
  },
  methods: {
    async populateCharacters(){
      this.characters = await Characters.getCharacters(); 
    }
  },
  mounted(){
    this.populateCharacters();
  }
}
</script>

<style scoped>

</style>
