<template>
  <div class="app-container">
    <AppHeader/>
    <main class="content">
      <router-view/>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader.vue';
import AppFooter from './layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
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
