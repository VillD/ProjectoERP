<script setup>
import BaseIcon from './BaseIcon.vue'
import { ref, computed } from 'vue'

const emit = defineEmits(['update:checkValue'])

const checkValue = ref(false)

const checkable = computed({
  get: () => checkValue,
  set: (value) => {
    checkValue.value = value
    emit('update:checkValue', value)
  }
})
const addIcon = computed(() => {
  let style = {}
  let normal = ''
  checkValue.value
    ? style[(normal += " before:content-['*'] before:text-xl")]
    : style[normal]
  return normal
})
</script>
<template>
  <!-- <div class="w-6 h-6 relative flex justify-center items-center"> -->
  <input
    v-model="checkable"
    :class="addIcon"
    type="checkbox"
    class="appearance-none flex items-center justify-center text-white p-1 rounded w-5 h-5 bg-slate-700 checked:bg-blue-500 cursor-pointer"
  />
  <!-- <BaseIcon
      v-if="checkValue"
      class="absolute cursor-pointer"
      name="fa-solid fa-check"
      @click="checkValue = !checkValue"
    /> -->
  <!-- </div> -->
</template>
