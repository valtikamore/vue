<template>
   <NavBar>
    <template v-slot:menuitems>
      <NavItem to="/" text="Login"/>
      <NavItem to="/" text="Register"/>
    </template>
   </NavBar>
</template>

<script>
import {defineAsyncComponent} from "vue";
const NavBar = defineAsyncComponent(() => import(/*webpackChunkName:'navbar'*/ '../components/molecules/NavBar.vue'))
const NavItem = defineAsyncComponent(() => import(/*webpackChunkName:'navitem'*/ '../components/molecules/NavItem.vue'))
  export default {
    components: {NavBar,NavItem}
  }
</script>

<style scoped>

</style>
