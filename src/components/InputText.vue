<script setup>
import BaseIcon from './BaseIcon.vue'
defineProps({
  textShadow: String,
  icon: {
    type: String,
    default: null
  },
  text: String,
  typeInput: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="relative">
    <input
      :type="typeInput"
      :placeholder="textShadow"
      :value="text"
      :class="icon ? 'pl-10' : 'px-3'"
      class="h-12 border border-gray-700 bg-slate-800 text-white w-full rounded"
    />
    <BaseIcon
      v-if="icon"
      :name="icon"
      class="text-white absolute"
    />
  </div>
</template>
