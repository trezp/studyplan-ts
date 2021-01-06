<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Default Message',
    },
  },
};
</script>

<style lang="scss" scoped></style>
