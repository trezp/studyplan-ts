<template>
    <ul class="catra-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gradebook">Gradebook</router-link></li>
        <li><router-link to="/characters">Super Heroes!</router-link></li>
    </ul>
</template>

<script>

</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        justify-content: space-between;
        width: 50%;

        li {
            font-size: 16px;
        }
    }

</style>