<script setup>
import { Field } from 'vee-validate'
const props = defineProps({
  labelRadio: String,
  valueRadio: [String, Number, Boolean],
  name: String,
  row: Boolean
})
</script>
<template>
  <div
    :class="
      props.row
        ? 'inline-flex gap-2 pr-4 last:pr:0'
        : 'flex gap-2 pb-4 last:pb-0'
    "
    class="items-center"
  >
    <Field
      type="radio"
      :name="name"
      :value="valueRadio"
      class="w-5 h-5 justify-center items-center flex appearance-none rounded-full bg-slate-500 before:block before:h-3 before:w-3 checked:before:bg-white before:rounded-full checked:flex-row-reverse checked:bg-blue-500 cursor-pointer"
    >
      <slot></slot>
    </Field>
  </div>
</template>
