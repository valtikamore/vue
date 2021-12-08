<template>
  <a v-bind="$attrs" class="link">
    <slot/>
  </a>
</template>

<script>

</script>

<style scoped>
    .link {
      @apply text-lg md:text-xl text-gray-800 dark:text-gray-50 underline
    }
</style>
