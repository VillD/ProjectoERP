<script setup>
import CardBasic from "./CardBasic.vue";
</script>
<template>
  <div class="m-2">
    <CardBasic class="flex flex-col max-w-xs sm:max-w-md">
      <template #header>
        <div class="flex justify-between">
          <div
            class="flex items-center bg-green-600 w-min rounded-full text-sm cursor-pointer"
          >
            <span class="pt-1 pb-1 pl-4 pr-2">
              <font-awesome-icon icon="fa-solid fa-chevron-up" />
            </span>
            <p class="pt-1 pb-1 pr-4">12%</p>
          </div>
          <div class="bg-blue-600 rounded-lg">
            <span class="p-2 flex items-center">
              <font-awesome-icon icon="fa-solid fa-gear" />
            </span>
          </div>
        </div>
      </template>
      <template #body>
        <div class="flex justify-between pt-4 items-center">
          <div class="">
            <div>
              <p class="text-xl font-light">Clients</p>
            </div>
            <div>
              <p class="text-3xl font-semibold">512</p>
            </div>
          </div>
          <div class="text-4xl text-green-500">
            <span class="p-2 flex items-center">
              <font-awesome-icon icon="fa-solid fa-users" />
            </span>
          </div>
        </div>
      </template>
    </CardBasic>
  </div>
</template>
