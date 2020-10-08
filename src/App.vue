<template>
  <div class="app-container">
    <Default>
      <router-view></router-view>
    </Default>
  </div>
</template>

<script>
import Default from './layouts/Default.vue';

export default {
  name: 'App',
  components: {
    Default
  }
}
</script>

<style lang="scss">
@import "./assets/scss";
  ul {
    list-style-type: none;
    padding-left: 0; 
  }
  .app-container {
    width: 80%; 
    margin: auto;
  }

  /* TEMP Stuff to made footer stick to bottom  */
  .content {
    min-height: calc(80vh - 70px);
  }
  .footer {
    height: 100px;
  }
</style>
