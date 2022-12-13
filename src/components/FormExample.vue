<script setup>
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import FormField from './FormField.vue'
import InputTextArea from './InputTextArea.vue'
import BaseButton from './BaseButton.vue'
import FormCheck from './FormCheck.vue'
import FormRadio from './FormRadio.vue'
import * as Yup from 'yup'
import { Form, Field } from 'vee-validate'

const arrayCheck = ['lorem', 'ipsum', 'dolore']

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  telf: Yup.string().required().length(9)
})
</script>
<template>
  <div class="p-6">
    <Form :validation-schema="schema">
      <FormField label="Grouped with icons">
        <div class="flex justify-between mt-2 gap-4">
          <FormInput
            type="text"
            name="name"
            icon="fa-user"
            class="w-full"
            placeholder="Jhon Dahn"
          />
          <FormInput
            type="email"
            name="email"
            icon="fa-rectangle-list"
            class="w-full"
            placeholder="john.doe@example.com"
          />
        </div>
      </FormField>

      <FormField
        label="With help line"
        help="Do not enter the leading zero"
      >
        <FormInput
          type="tel"
          name="telf"
          class="w-full mt-2"
          placeholder="Your phone number"
        />
      </FormField>

      <FormField label="Dropdown">
        <FormSelect
          :options="['Business development', 'Marketing', 'Sales']"
          name="example"
          class="mt-2"
          as="select"
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
    </Form>
  </div>
</template>
