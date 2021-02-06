<template>
  <div class="tile">
    <div class="tile-tile">
      <div class="tile-icon-placeholder">X</div>
      <div class="tile-title">
        <h3>{{ title }}</h3>
      </div>
    </div>
    <div class="tile-progress-bar">{{status}}</div>
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

<style lang="scss" scoped></style>
