import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthS = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  async function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
