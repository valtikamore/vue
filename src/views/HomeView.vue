<template>
  <div class="home">
    <LoginForm/>
  </div>
</template>

<script>

import {defineAsyncComponent} from "vue";

const LoginForm = defineAsyncComponent(() => import(/*webpackChunkName:"loginform"*/ '@components/organism/LoginForm.vue'))
export default {
  components: {LoginForm}
}
</script>
