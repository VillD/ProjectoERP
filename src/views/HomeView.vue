<script setup>
import CardBasic from '../components/CardBasic.vue';
</script>

<template>
  <div class="m-2">
    <CardBasic class="flex flex-col max-w-xs sm:max-w-md">
      <template #header>
        <div class="text-2xl ">
          <h1>Please confirm action</h1>
        </div>
      </template>
      <template #body>
        <div class=" text-base pt-4 pb-10">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis illum repudiandae saepe ipsam voluptatem error nihil, enim commodi vel dolor repellendus sapiente iusto neque sequi maiores, nesciunt iure expedita at.</p>
        </div>
      </template>
      <template #footer>
        <div class="flex w-10/12 gap-4 text-base">
          <button class="bg-blue-500 p-2 w-1/3 rounded-md" type="button">Confirm</button>
          <button class=" border-blue-500 w-1/3 p-2 border-2 rounded-md" type="button">Cancel</button>
        </div>
      </template>
    </CardBasic>
  </div>
</template>
