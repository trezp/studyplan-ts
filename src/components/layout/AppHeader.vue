<template>
    <header class="header-container">
        <router-link to="/" exact><h1>OHM Assessments</h1></router-link>
        <AppNavBar></AppNavBar>
    </header>
</template>

<script>
    import AppNavBar from './AppNavBar.vue';

    export default {
        components: { 
            AppNavBar
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