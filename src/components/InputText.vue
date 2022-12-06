<script setup>
import BaseIcon from './BaseIcon.vue'
defineProps({
  textGhost: String,
  icon: {
    type: String,
    default: null
  },
  text: {
    type: String,
    default: null
  },
  typeInput: {
    type: String,
    default: null
  }
})
</script>
<template>
  <div class="relative">
    <input
      :type="typeInput"
      :placeholder="textGhost"
      :class="icon ? 'pl-10' : 'px-3'"
      class="h-12 border border-gray-700 bg-slate-800 text-white w-full rounded"
    />
    <div
      class="absolute left-0 top-0 w-10 h-12 flex justify-center items-center"
    >
      <BaseIcon
        v-if="icon"
        :name="icon"
        class="text-xs text-slate-400"
      />
    </div>
  </div>
</template>
