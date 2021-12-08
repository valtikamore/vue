<template>
  <li v-bind="$attrs" class="list-item">
    <slot/>
  </li>
</template>

<script>

</script>

<style scoped>
.list-item {
  @apply text-lg md:text-xl text-gray-800 dark:text-gray-50
}

</style>
