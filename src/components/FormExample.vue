<script setup>
import InputText from './InputText.vue'
</script>
<template>
  <div class="p-6">
    <form
      action=""
      class="flex flex-col gap-6"
    >
      <div>
        <label class="font-bold">Grouped with icons</label>
        <div class="flex justify-between mt-2">
          <InputText
            type-input="text"
            value="John Doe"
            icon="faUser"
            class="w-2/5"
          />
          <InputText
            type-input="text"
            icon=""
            value="john.doe@example.com"
            class="w-2/5"
          />
        </div>
      </div>

      <div class="mt-2">
        <label class="font-bold">With help line</label>
        <InputText
          type-input="text"
          value="John Doe"
          class="w-full"
          text-shadow="Your phone number"
        />
        <p class="text-slate-400 mt-1 text-xs">Do not enter the leading zero</p>
      </div>

      <label class="font-bold">With help line</label>
      <div class="mt-2">
        <input
          type="checkbox"
          name=""
        />
        <InputText
          type-input="password"
          value="John Doe"
          class="w-full"
        />
        <p class="text-slate-400 mt-1 text-xs">Do not enter the leading zero</p>
      </div>
    </form>
  </div>
</template>
