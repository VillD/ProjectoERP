<script setup>
import BaseIcon from './BaseIcon.vue'
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  empty: Boolean,
  form: Boolean
})
const emit = defineEmits(['submit'])
const is = computed(() => (props.form ? 'form' : 'div'))
const submit = (e) => {
  emit('submit', e)
}
</script>
<template>
  <component
    :is="is"
    @submit="submit"
  >
    <header
      v-if="title"
      class="flex border-b border-slate-800"
    >
      <div
        class="flex items-center py-3 grow font-bold"
        :class="[icon ? 'px-4' : 'px-6']"
      >
        <BaseIcon
          v-if="icon"
          :path="icon"
          class="mr-3"
        />
        {{ title }}
      </div>
    </header>

    <div
      class="flex-1"
      :class="{ 'p-6': !hasTable }"
    >
      <slot name="body" />
    </div>

    <div class="p-6">
      <slot name="footer" />
    </div>
  </component>
</template>
