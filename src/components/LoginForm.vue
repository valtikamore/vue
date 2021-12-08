<template>
  <div>
    <form class="mt-10" @submit="onSubmitHandler">
      <div>
        <input type="text"
               name="name"
               v-model="person.email"
               class="input"
               placeholder="Email">
      </div>
      <div class="mt-7">
        <input type="password"
               v-model="person.password"
               placeholder="password"
               class="input"
        >
      </div>
      <div class="mt-7">
        <button
            class="button">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  setup() {
    const person = reactive({
      email: '',
      password: '',
    })
    const onSubmitHandler = (e) => {
      e.preventDefault()
      console.log(person.email, person.password)
    }
    return {person, onSubmitHandler}
  }

}

</script>
