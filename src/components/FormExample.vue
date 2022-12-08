<script setup>
import InputText from './InputText.vue'
import InputSelect from './InputSelect.vue'
import FormField from './FormField.vue'
import InputTextArea from './InputTextArea.vue'
import BaseButton from './BaseButton.vue'
import FormCheck from './FormCheck.vue'
import FormRadio from './FormRadio.vue'

const arrayCheck = ['lorem', 'ipsum', 'dolore']
</script>
<template>
  <div class="p-6">
    <form
      action=""
      class=""
    >
      <FormField label="Grouped with icons">
        <div class="flex justify-between mt-2 gap-4">
          <InputText
            type-input="text"
            icon="fa-user"
            class="w-full"
          />
          <InputText
            type-input="text"
            icon="fa-rectangle-list"
            class="w-full"
          />
        </div>
      </FormField>

      <FormField
        label="With help line"
        help="Do not enter the leading zero"
      >
        <InputText
          type-input="text"
          class="w-full mt-2"
          text-ghost="Your phone number"
        />
      </FormField>

      <FormField label="Dropdown">
        <InputSelect
          :value-opions="['Business development', 'Marketing', 'Sales']"
          class="mt-2"
        />
      </FormField>

      <hr class="my-6 -mx-6 border-slate-800 border-t" />

      <FormField
        label="Question"
        help="Your question. Max 255 characters"
      >
        <InputTextArea text-ghost="Explain how we can help you" />
      </FormField>

      <FormField label="Checkbox">
        <FormCheck
          v-for="(checking, index) in arrayCheck"
          :key="index"
          :options-checks="checking"
          :label-check="checking"
          name="sample-check"
          row
        />
      </FormField>

      <hr class="my-6 -mx-6 border-slate-800 border-t" />

      <FormField label="Radio">
        <FormRadio
          v-for="(radio, index) in arrayCheck"
          :key="index"
          :value-radio="radio"
          name="sample-radio"
          :label-radio="radio"
          row=""
        />
      </FormField>

      <hr class="my-6 -mx-6 border-slate-800 border-t" />

      <FormField label="Swtich">
        <FormCheck
          v-for="(swtich, index) in arrayCheck"
          :key="index"
          name="sample-swtich"
          is-switch
          row
          :label-check="swtich"
        >
        </FormCheck>
      </FormField>

      <hr class="my-6 -mx-6 border-slate-800 border-t" />

      <div class="flex gap-4 py-6">
        <BaseButton>Submit</BaseButton>
        <BaseButton outline>Reset</BaseButton>
      </div>
    </form>
  </div>
</template>
