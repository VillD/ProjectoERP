<script setup>
import BaseIcon from '../components/BaseIcon.vue'
import FormDynamic from '../components/FormDynamic.vue'
import FormExample from '../components/FormExample.vue'
import FormTest from '../components/FormTest.vue'
import FormUseField from '../components/formUseField.vue'
</script>
<template>
  <div class="p-6 xl:max-w-6xl xl:mx-auto">
    <div class="flex items-center text-white mb-6">
      <span
        class="w-12 h-12 rounded-full bg-slate-900/70 mr-3 inline-flex justify-center items-center"
      >
        <BaseIcon
          class="w-6 h-6"
          name="fa-rectangle-list"
        />
      </span>
      <h1 class="text-3xl">Tables</h1>
    </div>
    <div class="flex mb-6 gap-6 flex-col">
      <div class="bg-slate-900/70 rounded-2xl flex-1 text-white">
        <FormExample />
      </div>
      <div class="bg-slate-900/70 rounded-2xl flex-1 text-white">
        <FormTest />
      </div>

      <div class="bg-slate-900/70 rounded-2xl flex-1 text-white">
        <FormDynamic />
      </div>
      <div class="bg-slate-900/70 rounded-2xl flex-1 text-white">
        <FormUseField />
      </div>
    </div>
  </div>
</template>
