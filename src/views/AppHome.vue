<template>
  <div>
    <TileList />
    <p><router-link to="/gradebook">Gradebook</router-link></p>
  </div>
</template>

<script>
import TileList from '../components/TileList.vue';

export default {
  components: {
    TileList,
  },
};
</script>

<style lang="scss" scoped></style>
