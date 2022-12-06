<script setup>
defineProps({
  textGhost: {
    type: String,
    default: null
  }
})
</script>
<template>
  <div>
    <textarea
      :placeholder="textGhost"
      class="px-3 py-2 w-full h-24 border border-gray-700 bg-slate-800 text-white rounded"
    >
    </textarea>
  </div>
</template>
