<template>
  <div>
    <h2>{{character.name}}</h2>
    <p>{{character.power}}</p>
  </div>
</template>

<script>

export default {
  name: "Character",
  props: {
    character: Object
  }
}
</script>

<style lang="scss" scoped>

</style>