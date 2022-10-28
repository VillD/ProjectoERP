<script setup>
import SettingBasic from '../components/SettingBasic.vue'
import ButtonBasic from '../components/ButtonBasic.vue'
import { ref } from 'vue'

let isOutline = ref()
</script>
<template>
  <h1 class="text-lg font-semibold text-white pb-2">Settings</h1>
  <div class="flex flex-wrap">
    <SettingBasic v-model="isOutline"> </SettingBasic>
  </div>
  <div
    class="bg-slate-900/70 rounded-xl max-w-xs sm:max-w-md m-2 p-4 lg:max-w-4xl"
  >
    <ButtonBasic
      :outline="isOutline"
      title-button="Button"
    ></ButtonBasic>
  </div>
</template>
