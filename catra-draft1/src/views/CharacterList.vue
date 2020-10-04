<template>
  <ul>
    <li v-for="character in characters" :key="character.id">
      <router-link :to="`/characters/${character.id}`">{{character.name}}</router-link>
    </li>
  </ul>
</template>

<script> 

export default {
  name: 'CharacterList',
  props: {
    msg: String 
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
