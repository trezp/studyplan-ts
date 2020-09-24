<template>
    <div class="header-container">
        <h1>Header</h1>
        <NavBar></NavBar>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue';

    export default {
        components: { 
            NavBar
         },
    }
</script>

<style lang="scss" scoped>
    div {
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