<template>
    <AppHeader/>
    <main class="content">
        <slot></slot>
    </main>
    <AppFooter/>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style lang="scss" scoped>

</style>