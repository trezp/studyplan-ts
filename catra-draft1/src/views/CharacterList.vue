<template>
  <ul>
    <li class="active"
        v-for="character in characters" 
        :key="character.id">
      <p>Name: {{character.name}}</p>
      <p>Power: {{character.power}}</p>
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
