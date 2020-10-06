<template>
  <router-link to="/">Back</router-link>
  <ul>
    <li v-for="character in characters" :key="character.id">
      <button type="button" @click="makeActive(character)">{{character.name}}</button>
    </li>
  </ul>
  <Character :character="activeCharacter"/>
  <HelloWorld msg="Dear god please work"/>
</template>

<script> 
import Character from "../components/Character.vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: 'CharacterList',
  components: {
    Character,
    HelloWorld
  },
  data(){
    return {
      characters: [],
      activeCharacter: "",
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
    } catch(err){
      console.log(err);
    }
  }
}
</script>

<style scoped>

</style>
