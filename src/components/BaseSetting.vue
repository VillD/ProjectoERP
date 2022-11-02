<script setup>
import { computed, ref } from 'vue'

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
  nameInput: String
})
</script>

<template>
  <div class="flex pb-2">
    <label class="flex m-6">
      <input
        v-model="computedValue"
        type="checkbox"
        class="mx-2 appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse checked:bg-blue-500"
      />
      <span class="pl-2 text-white">{{ props.nameInput }}</span>
    </label>
  </div>
</template>
