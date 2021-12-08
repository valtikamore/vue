<template>
  <header class="navbar">
    <div class="icons-set">
      <Logo/>
      <button class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </button>
    </div>
    <ul class="menu">
      <slot name="menuitems"/>
    </ul>
  </header>
</template>

<script>

</script>

<style scoped>
.hamburger {
  @apply hidden md:block
}
.line {
  @apply h-[5px] mt-[5px] w-[40px] bg-gray-50
}
</style>
