<script setup>
import BaseIcon from '../components/BaseIcon.vue'
import DataTable from '../components/DataTable.vue'
</script>
<template>
  <div class="p-6 xl:max-w-6xl xl:mx-auto">
    <div class="flex items-center text-white mb-6">
      <span
        class="w-12 h-12 rounded-full bg-slate-900/70 mr-3 inline-flex justify-center items-center"
      >
        <BaseIcon
          class="w-6 h-6"
          name="fa-solid fa-table"
        />
      </span>
      <h1 class="text-3xl">Tables</h1>
    </div>
    <div class="flex mb-6 gap-6 flex-col lg:flex-row">
      <div class="bg-slate-900/70 rounded-2xl flex-1 text-white">
        <DataTable />
      </div>
    </div>
  </div>
</template>
