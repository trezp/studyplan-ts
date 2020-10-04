<template>
  <router-link to="/">Back</router-link>
  <ul>
    <li v-for="character in characters" :key="character.id">
      <!-- <router-link :to="`/characters/${character.id}`">{{character.name}}</router-link> -->
      <Character :character="character"/>
    </li>
  </ul>
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
      characters: []
    }
  },
  computed: {
    
  },
  async mounted(){
    try {
      await this.$store.dispatch('characters/getCharacters');
      this.characters = this.$store.state.characters.all;
    } catch(err){
      console.log(err);
    }
  }
}
</script>

<style scoped>

</style>
