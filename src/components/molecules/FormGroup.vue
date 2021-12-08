<template>
  <div class="form-group">
    <slot name="input"/>
  </div>
</template>

<style scoped>
  .form-group {
    @apply grid grid-cols-1 gap-2
  }
</style>
