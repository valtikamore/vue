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
import {defineAsyncComponent} from "vue";
const Logo = defineAsyncComponent(() => import(/*webpackChunkName:'logo'*/ '../atoms/Logo'))

export default {
  components : {
    Logo
  }
}
</script>

<style scoped>
.icons-set {
  @apply w-full md:w-2/12 flex flex-row items-center space-between
}
.hamburger {
  @apply hidden md:block
}
.line {
  @apply h-[5px] mt-[5px] w-[40px] bg-gray-50
}
.menu {
  @apply flex flex-col md:flex-row md:items-center space-between space-y-4 md:space-y-0 space-x-0 md:space-x-5
}
</style>
