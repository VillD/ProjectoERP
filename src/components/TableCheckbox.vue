<script setup>
import BaseIcon from './BaseIcon.vue'
import { ref, watch } from 'vue'

const emit = defineEmits(['checked'])

const checked = ref(false)

// const addIcon = () => {
//    let style = {}
//   let normal = ''
//   checked.value
//     ? style[(normal += " before:content-['*'] before:text-xl")]
//     : style[normal]
//   return normal
// }

watch(checked, (newVal) => {
  emit('checked', newVal)
})
</script>
<template>
  <div class="w-5 h-5 relative flex justify-center items-center">
    <input
      v-model="checked"
      type="checkbox"
      class="appearance-none flex items-center justify-center text-white p-1 rounded w-5 h-5 bg-slate-700 checked:bg-blue-500 cursor-pointer"
    />
    <BaseIcon
      v-if="checked"
      class="absolute cursor-pointer text-white"
      name="fa-solid fa-check"
    />
  </div>
</template>
