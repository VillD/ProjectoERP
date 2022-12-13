<script setup>
import BaseIcon from './BaseIcon.vue'
import { Field, ErrorMessage } from 'vee-validate'
import { computed } from '@vue/reactivity'

defineProps({
  placeholder: { type: String, default: null },
  icon: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  type: {
    type: String,
    required: true
  },
  rules: {
    type: Function,
    default: null
  },
  as: {
    type: String,
    default: 'input'
  }
})
</script>
<template>
  <div class="relative">
    <Field
      :type="type"
      :placeholder="placeholder"
      :class="icon ? 'pl-10' : 'px-3'"
      :name="name"
      :as="as"
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
    <ErrorMessage
      class="text-sm text-danger"
      :name="name"
    ></ErrorMessage>
  </div>
</template>
