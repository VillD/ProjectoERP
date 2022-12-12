<script setup>
defineProps({
  label: {
    type: String,
    default: null
  },
  help: {
    type: String,
    default: null
  }
})
</script>
<template>
  <div class="mb-6 last:mb-0">
    <label
      v-if="label"
      :for="label"
      class="block font-bold mb-2"
      >{{ label }}
    </label>

    <slot />
    <div
      v-if="help"
      class="text-xs text-slate-400 mt-1"
    >
      {{ help }}
    </div>
  </div>
</template>
