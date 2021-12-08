<template>
 <ListItem>
   <router-link :to="to">
      {{text}}
   </router-link>
 </ListItem>
</template>

<script>
import {defineAsyncComponent} from "vue";

const ListItem = defineAsyncComponent(() => import(/*webpackChunkName:"Listitem"*/ '@components/atoms/ListItem'))
  export default  {
   props: {
     to: String,
     text: String
   },
    components: {
      ListItem
    }
  }
</script>

<style>

</style>
