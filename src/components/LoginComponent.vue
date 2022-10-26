<script setup>
import CardBasic from "./CardBasic.vue";
</script>
<template>
  <div class="m-2">
    <CardBasic
      class="bg-slate-900/70 py-6 max-w-xs sm:max-w-md flex flex-col shadow-2xl"
    >
      <template #body>
        <div>
          <form action="">
            <div class="flex flex-col mb-6">
              <label for="user" class="text-lg font-semibold mb-4">Login</label>
              <div class="relative flex items-center">
                <input
                  type="text"
                  name=""
                  id="user"
                  class="bg-slate-800 px-3 max-w-full pl-10 py-3 text-sm rounded-md border border-gray-700 h-12 w-full"
                />
                <span
                  class="absolute left-0 justify-center top-0 w-10 h-12 inline-flex items-center text-gray-500"
                  ><font-awesome-icon icon="fa-solid fa-user"
                /></span>
              </div>

              <span class="text-sm mt-2 text-gray-300"
                >Please enter your login</span
              >
            </div>
            <div class="flex flex-col mb-6">
              <label for="password" class="text-lg font-semibold mb-4"
                >Password</label
              >
              <div class="relative flex items-center">
                <input
                  type="password"
                  name=""
                  id="password"
                  class="bg-slate-800 px-3 max-w-full pl-10 py-3 text-sm rounded-md border border-gray-700 h-12 w-full"
                />
                <span
                  class="absolute left-0 justify-center top-0 w-10 h-12 inline-flex items-center text-gray-500"
                  ><font-awesome-icon icon="fa-solid fa-lock"
                /></span>
              </div>

              <span class="text-sm mt-2 text-gray-300"
                >Please enter your password</span
              >
            </div>
            <div class="flex items-center mb-10">
              <input
                type="checkbox"
                name=""
                id="check"
                class="appearance-none w-5 h-5 mr-2 border bg-slate-800 border-gray-700 rounded text-white"
              />
              <label for="check">Remember</label>
            </div>
            <div class="flex">
              <input
                type="submit"
                class="p-2 mr-4 rounded-md border-blue-500 bg-blue-500 w-1/5 cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:transition"
                value="Login"
              />
              <input
                type="submit"
                class="p-2 rounded-md border border-blue-500 w-1/5 cursor-pointer text-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:transition"
                value="Back"
              />
            </div>
          </form>
        </div>
      </template>
    </CardBasic>
  </div>
</template>
