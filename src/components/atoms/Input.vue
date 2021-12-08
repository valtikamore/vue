<template>
  <input v-bind="$attrs"
         v-model="value"
         class="input"
         :value="value"
         >
</template>

<script>
  export default {
    props: ['value']
  }
</script>

<style>

</style>
