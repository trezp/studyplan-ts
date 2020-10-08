<template>
    <div>
        <HelloWorld msg="Hello from Ohm Assessments"/>
        <p><router-link to="/gradebook">Gradebook</router-link></p>
    </div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld.vue";

    export default {
        components: {
            HelloWorld
        }
    }
</script>

<style lang="scss" scoped>

</style>