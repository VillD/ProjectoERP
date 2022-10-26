<script setup>
// import { processSlotOutlet } from "@vue/compiler-core";
// import { computed } from "@vue/reactivity";
// import { ref } from "vue";

const props = defineProps({
  titleButton: String,
  type: { type: String, default: "primary" },
});

// const backgroundColor = ref(`bg-${props.type}`);
</script>
<template>
  <div>
    <button :class="`bg-${props.type}`" class="py-2 px-4 rounded">
      <span class="px-2">{{ titleButton }}</span>
    </button>
  </div>
</template>
