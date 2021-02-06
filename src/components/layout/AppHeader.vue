<template>
  <header class="header-container">
    <h1>What Is Marketing?</h1>
    <AppNavBar></AppNavBar>
  </header>
</template>

<script>
import AppNavBar from './AppNavBar.vue';

export default {
  components: {
    AppNavBar,
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 0;

  li {
    font-size: 16px;
  }
}
</style>
