<template>
  <div>
    <TileList :tiles="tiles" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TileList from '../components/TileList.vue';

export default {
  components: {
    TileList,
  },
  computed: {
    ...mapGetters({
      tiles: 'studyplan/tiles',
    }),
  },
};
</script>

<style lang="scss" scoped></style>
