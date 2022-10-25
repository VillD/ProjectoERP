<script setup>
import ModaBasic from "../components/ModaBasic.vue";
import ButtonBasic from "../components/ButtonBasic.vue";
</script>
<template>
  <div
    class="bg-slate-900/70 rounded-xl max-w-xs sm:max-w-md m-2 p-4 text-white"
  >
    <ModaBasic>
      <template #header>
        <div class="flex justify-between">
          <h1 class="text-2xl">Please confirm action</h1>
          <span
            class="w-2 h-2 p-4 bg-blue-600 rounded-full flex justify-center cursor-pointer"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" class="self-center" />
          </span>
        </div>
      </template>
      <template #body>
        <div class="text-base pt-4 pb-10"><p>Click to see in action</p></div>
      </template>
      <template #footer>
        <div>
          <ButtonBasic>
            <template #content>
              <div class="flex w-10/12 gap-4 text-base">
                <button class="bg-blue-500 p-2 w-1/3 rounded-md" type="button">
                  Confirm
                </button>
                <button
                  class="border-blue-500 w-1/3 p-2 border-2 rounded-md"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </template>
          </ButtonBasic>
        </div>
      </template>
    </ModaBasic>
  </div>
</template>
