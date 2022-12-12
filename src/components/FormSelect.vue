<script setup>
import { Field } from 'vee-validate'
defineProps({
  valueOpions: {
    type: Array,
    default: null
  }
})
</script>
<template>
  <div>
    <select
      class="px-3 py-2 bg-slate-800 h-12 placeholder:bg-gray-400 rounded w-full border border-gray-700"
    >
      <option
        v-for="(value, k) in valueOpions"
        :key="k"
      >
        {{ value }}
      </option>
    </select>
  </div>
</template>
