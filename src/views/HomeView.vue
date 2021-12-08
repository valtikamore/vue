<template>
  <div class="home">
    <LoginForm/>
  </div>
</template>

<script>

import {defineAsyncComponent} from "vue";

const LoginForm = defineAsyncComponent(() => import(/*webpackChunkName:"loginform"*/ '../components/LoginForm'))
export default {
  components: {LoginForm}
}
</script>
