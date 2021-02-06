<template>
  <div class="tile">
    <div class="tile-header"></div>
    <div class="tile-body">
      <div class="tile-icon-placeholder">X</div>
      <h3>{{ title }}</h3>
    </div>
    <div class="tile-progress-bar">{{ status }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    title: {
      type: String,
      default: 'Tile Title',
    },
    status: {
      type: String,
      default: '0/1',
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  border: 1px solid #c3c3c3;
  width: 300px;
  background-color: #fafafa;
  cursor: pointer;
}
.tile-header {
  height: 35px;
}

.tile-body {
  height: 130px;
  text-align: center;
}

.tile-progress-bar {
  text-align: right;
  padding: 0.3rem 0.4rem;
  background: #aeb8c1;
}
</style>
