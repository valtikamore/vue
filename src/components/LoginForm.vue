<template>
  <div>
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <div  class="mt-3 text-sm text-gray-700 text-center">
            Login
          </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import {reactive,
  // computed,
  // watch
} from "vue";
export default {
  setup() {
    const person = reactive({
      email:'',
      password:'',
    })
    // watch(person,(newV,prevV) => {
    //   if(newV.name.length > 4 ) console.log('more then 4 symbols')
    //   console.log(newV)
    //   console.log(prevV)
    // })
    const onSubmitHandler = (e) => {
      e.preventDefault()
      console.log(person.email, person.password)
    }
    return {person,onSubmitHandler}
  }

}

</script>
