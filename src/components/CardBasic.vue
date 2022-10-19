<script setup></script>

<template>
  <div class="p-4 bg-blue-900 rounded-xl text-white">
    <slot name="header" />
    <slot name="body" />
    <slot name="footer" />
  </div>
</template>

<style scoped></style>
