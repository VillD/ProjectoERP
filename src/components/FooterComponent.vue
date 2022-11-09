<script setup>
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>
<template>
  <footer class="py-2 px-6">
    <div class="flex justify-between md:px-6 xl:max-w-6xl xl:mx-auto">
      <div class="text-white text-center md:text-left">
        <b
          >&copy;{{ year }},
          <a
            href="https://justboil.me/"
            target="_blank"
            >JustBoil.me</a
          >.</b
        >
        Get more with
        <a
          href="https://tailwind-vue.justboil.me/"
          target="_blank"
          class="text-blue-600"
          >Premium version</a
        >
      </div>
      <div class="w-8 h-8 bg-slate-50 md:py-2">
        <a href="https://justboil.me">
          <div class="w-auto h-8 md:h-6"></div>
        </a>
      </div>
    </div>
  </footer>
</template>
