<script setup>
import CardBasic from "./CardBasic.vue";
</script>
<template>
  <div class="m-2">
    <CardBasic class="max-w-xs sm:max-w-md flex flex-col">
      <template #body>
        <div>
          <form action="">
            <div class="flex flex-col mb-6">
              <label for="user" class="text-xl font-semibold mb-4">Login</label>
              <input
                type="text"
                name=""
                id="user"
                class="bg-slate-500 rounded-md outline outline-2 outline-slate-400 h-10"
              />
              <span class="text-sm mt-2">Please enter your login</span>
            </div>
            <div class="flex flex-col mb-6">
              <label for="password" class="text-xl font-semibold mb-4"
                >Password</label
              >
              <input
                type="password"
                name=""
                id="password"
                class="bg-slate-500 rounded-md outline outline-2 outline-slate-400 h-10"
              />
              <span class="text-sm mt-2">Please enter your password</span>
            </div>
            <div class="flex items-center mb-10">
              <input
                type="checkbox"
                name=""
                id="check"
                class="mr-2 w-4 h-4 outline-none bg-blue-500 text-blue-500 focus:bg-blue-500 active:bg-blue-500"
              />
              <label for="check">Remember</label>
            </div>
            <div class="flex">
              <input
                type="submit"
                class="p-2 mr-4 rounded-md bg-blue-500"
                value="Login"
              />
              <input
                type="submit"
                class="p-2 rounded-md border border-2 border-blue-500"
                value="Back"
              />
            </div>
          </form>
        </div>
      </template>
    </CardBasic>
  </div>
</template>
