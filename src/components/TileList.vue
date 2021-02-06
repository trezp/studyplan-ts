<template>
  <div class="tile-list">
    <Tile :title="tile.title" v-for="tile in tiles" :key="tile.tileId"/>
  </div>
</template>

<script>
import Tile from './Tile.vue';

export default {
  components: {
    Tile,
  },
  data: () => {
    return {
      tiles: [
        {
          tileId: 1,
          title: 'This is a tile',
          status: '0/1',
        },
        {
          tileId: 1,
          title: 'This is a tile',
          status: '0/1',
        },
        {
          tileId: 1,
          title: 'This is a tile',
          status: '0/1',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tile-list {
    display: flex;
    justify-content: space-between;
}
</style>
