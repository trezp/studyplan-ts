<template>
    <header class="header-container">
        <router-link to="/"><h1>Header</h1></router-link>
        <NavBar></NavBar>
    </header>
</template>

<script>
    import NavBar from '../layout/NavBar.vue';

    export default {
        components: { 
            NavBar
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