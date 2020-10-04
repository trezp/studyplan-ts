<template>
    <header class="header-container">
        <router-link to="/"><h1>Header</h1></router-link>
        <MainNavBar></MainNavBar>
    </header>
</template>

<script>
    import MainNavBar from '../layout/MainNavBar.vue';

    export default {
        components: { 
            MainNavBar
         },
    }
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