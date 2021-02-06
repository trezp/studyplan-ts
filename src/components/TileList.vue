<template>
  <div class="tile-list">
    <Tile v-for="tile in tiles" :key="tile.tileId" :title="tile.title" />
  </div>
</template>

<script>
import Tile from './Tile.vue';

export default {
  components: {
    Tile,
  },
  props: {
    tiles: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tile-list {
  display: flex;
  justify-content: space-between;
}
</style>
