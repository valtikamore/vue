<template>
  <h1 class="title">{{title}}</h1>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style scoped>
  .title {
    @apply p-1 text=3xl md:text-3xl text-gray900 dark:text-gray-50 font-bold
  }
</style>
