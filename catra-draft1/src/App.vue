<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<script>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue'
import Main from './layout/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>

</style>
