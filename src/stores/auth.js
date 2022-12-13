import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('auth', () => {
  state: () => {
    return {
      jwt: '',
      error: ''
    }
  }
  actions: {
  }
})
