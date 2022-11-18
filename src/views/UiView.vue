<script setup>
// import LayoutAuthenticated from '../layouts/LayoutAuthenticated.vue'

import BaseSetting from '../components/BaseSetting.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseIcon from '../components/BaseIcon.vue'
import ButtonPill from '../components/ButtonPill.vue'
import BaseCard from '../components/BaseCard.vue'
import NotificationBar from '../components/NotificationBar.vue'

import { ref } from 'vue'

const switchs = ref([
  { value: ref(false), name: 'Outline' },
  { value: ref(false), name: 'Small' },
  { value: ref(false), name: 'Rounded' },
  { value: ref(false), name: 'Disabled' }
])

const switchsPills = ref([
  { value: ref(false), name: 'Outline' },
  { value: ref(false), name: 'Small' },
  { value: ref(false), name: 'Icon' }
])
const buttons = ref([
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'light',
  'dark'
])
</script>
<template>
  <section class="py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center -my-6">
    <h1 class="text-2xl dark:text-slate-400">Modal examples</h1>
  </section>
  <section class="p-6 xl:max-w-6xl xl:mx-auto">
    <div
      class="bg-slate-900/70 rounded-xl xl:max-w-6xl xl:mx-auto p-6 lg:max-w-4xl flex justify-evenly"
    >
      <BaseCard
        title="Primary card"
        class="mr-2"
        >Show Modal
        <template #body> This is sample modal Lorem ipsum dolor </template>
      </BaseCard>
      <BaseCard
        title="Unhandled exception"
        type="danger"
        color="danger"
        >Danger
        <template #body>This is sample modal Lorem ipsum dolor </template>
      </BaseCard>
      <BaseCard
        title="Success"
        color="success"
        type="success"
        >Success</BaseCard
      >
    </div>
  </section>

  <section class="py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center -my-6">
    <h1 class="text-2xl dark:text-slate-400">Notifications</h1>
  </section>

  <div class="m-2 p-6 xl:max-w-6xl xl:mx-auto">
    <NotificationBar
      color="primary"
      title="Info state"
      icon="fa-solid fa-circle-info"
    >
    </NotificationBar>
    <NotificationBar
      color="success"
      title="Success state"
      icon="fa-solid fa-circle-check"
    >
    </NotificationBar>
    <NotificationBar
      color="warning"
      title="Warning state"
      icon="fa-solid fa-triangle-exclamation"
    >
    </NotificationBar>
    <NotificationBar
      color="danger"
      title="Danger state"
      icon="fa-solid fa-circle-exclamation"
    >
    </NotificationBar>
    <NotificationBar
      color="light"
      title="Contrast"
      icon="fa-solid fa-circle-exclamation"
    >
    </NotificationBar>
  </div>

  <section class="py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center -my-6">
    <h1 class="text-2xl dark:text-slate-400">Buttons</h1>
  </section>

  <section class="p-6 xl:max-w-6xl xl:mx-auto">
    <div class="bg-slate-900/70 rounded-xl m-2 flex-wrap p-6 lg:flex-1">
      <h1 class="text-lg font-semibold text-white pb-2">Settings</h1>
      <div class="flex flex-wrap mb-6">
        <BaseSetting
          v-for="(item, k) in switchs"
          :key="k"
          v-model="item.value"
          :name-input="item.name"
          class="mr-6 mb-3"
        >
        </BaseSetting>
      </div>
      <hr class="my-6 -mx-4 border-slate-800" />
      <div class="">
        <BaseButton
          v-for="(type, index) in buttons"
          :key="index"
          class="mr-3 mb-3"
          :type="type"
          :outline="switchs[0].value"
          :small="switchs[1].value"
          :rounded-full="switchs[2].value"
          :disabled="switchs[3].value"
        >
          <span class="px-2">Button</span>
        </BaseButton>
      </div>
      <hr class="my-6 -mx-4 border-slate-800" />
      <div class="">
        <BaseButton
          v-for="(type, index) in buttons"
          :key="index"
          class="mr-3 mb-3"
          :type="type"
          :outline="switchs[0].value"
          :small="switchs[1].value"
          :rounded-full="switchs[2].value"
          :disabled="switchs[3].value"
        >
          <BaseIcon name="fa-solid fa-arrow-up-right-from-square" />
          <span class="px-2">Button</span>
        </BaseButton>
      </div>
      <hr class="my-6 -mx-4 border-slate-800" />
      <div class="">
        <BaseButton
          v-for="(type, index) in buttons"
          :key="index"
          class="mr-2"
          :type="type"
          :outline="switchs[0].value"
          :small="switchs[1].value"
          :rounded-full="switchs[2].value"
          :disabled="switchs[3].value"
        >
          <BaseIcon name="fa-solid fa-arrow-up-right-from-square" />
        </BaseButton>
      </div>
    </div>
  </section>

  <section class="py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center -my-6">
    <h1 class="text-2xl dark:text-slate-400">Pills</h1>
  </section>

  <section class="p-6 xl:max-w-6xl xl:mx-auto">
    <div class="bg-slate-900/70 rounded-xl mx-2 p-6 lg:flex-1">
      <h1 class="text-lg font-semibold text-white pb-2">Settings</h1>
      <div class="flex mb-6 flex-wrap">
        <BaseSetting
          v-for="(item, k) in switchsPills"
          :key="k"
          v-model="item.value"
          :name-input="item.name"
        >
        </BaseSetting>
      </div>
      <hr class="my-6 -mx-4 border-slate-800" />
      <div class="">
        <ButtonPill
          v-for="(type, index) in buttons"
          :key="index"
          class="mr-2"
          :type="type"
          :label="type"
          :outline="switchsPills[0].value"
          :small="switchsPills[1].value"
          :icon="switchsPills[2].value"
          path="fa-solid fa-arrow-trend-up"
        >
        </ButtonPill>
      </div>
    </div>
  </section>
</template>
