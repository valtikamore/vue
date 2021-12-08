<template>
    <div >
      <NavBarGuest/>
      <div class="main-wrapper">
        <div class="page">
          <router-view/>
        </div>

      </div>
    </div>
</template>

<script>

  import {defineAsyncComponent} from "vue";
  const NavBarGuest = defineAsyncComponent(() => import(/*webpackChunkName:"navbarguest"*/ '@components/orgamism/NavBarGuest.vue'))
  export default {
    components: {NavBarGuest}
  }
</script>

<style scoped>
  .main-wrapper {
    @apply h-screen flex bg-white dark:bg-gray-900 overflow-auto
  }
  .page {
    @apply m-auto
  }
</style>
