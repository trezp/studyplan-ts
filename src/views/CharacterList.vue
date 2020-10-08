<template>
  <router-link to="/">Back</router-link>
  <ul class="character-list">
    <li v-for="character in characters" :key="character.id">
      <button type="button" 
        class="button" 
        @click="makeActive(character)">{{character.name}}</button>
    </li>
  </ul>
  <Character :character="activeCharacter"/>
</template>

<script> 
import Character from "../components/Character.vue";

export default {
  name: 'CharacterList',
  components: {
    Character
  },
  data(){
    return {
      characters: [],
      activeCharacter: {},
      active: false
    }
  },
  computed: {
  },
  methods: {
    makeActive(character){
      this.activeCharacter = character;
    }
  },
  async mounted(){
    try {
      await this.$store.dispatch('characters/getCharacters');
      this.characters = this.$store.state.characters.all;
      this.activeCharacter = this.characters[0];
    } catch(err){
      console.log(err);
    }
  }
}
</script>

<style scoped>
  .character-list {
    display: flex;
  }
</style>
