<script setup>
import { Field } from 'vee-validate'
defineProps({
  options: {
    type: Array,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  as: {
    type: String,
    default: null
  }
})
</script>
<template>
  <Field
    class="px-3 py-2 bg-slate-800 h-12 placeholder:bg-gray-400 rounded w-full border border-gray-700"
    :name="name"
    :as="as"
  >
    <option
      v-for="(value, k) in options"
      :key="k"
      :value="value"
      :selected="value"
    >
      {{ value }}
    </option>
  </Field>
</template>
