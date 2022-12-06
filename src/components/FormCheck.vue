<script setup>
import { computed, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

const emit = defineEmits(['update:modelValue'])

const modelValue = ref(false)

const computedValue = computed({
  get: () => modelValue,
  set: (value) => {
    modelValue.value = value
    emit('update:modelValue', value)
  }
})
const props = defineProps({
  isSwitch: Boolean,
  isCheckbox: Boolean
})
const stylesCheck = computed(() => {
  let base = []
  props.isSwitch
    ? base.push(
        'appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse checked:bg-blue-500'
      )
    : base.push(
        'appearance-none flex items-center justify-center text-white p-1 rounded w-5 h-5 bg-slate-700 checked:bg-blue-500 cursor-pointer'
      )
  return base
})
const styleContent = computed(() => {
  let base = []
  props.isSwitch
    ? ''
    : base.push('relative w-5 h-5 flex justify-center items-center')
  return base
})
</script>
<template>
  <div :class="styleContent">
    <input
      v-model="computedValue"
      type="checkbox"
      :class="stylesCheck"
    />
    <div v-if="!isSwitch">
      <BaseIcon
        v-if="modelValue"
        class="absolute cursor-pointer text-white"
        name="fa-solid fa-check"
      />
    </div>
  </div>
</template>
