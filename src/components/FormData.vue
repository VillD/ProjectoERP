<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

defineProps({
  schema: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <Form class="m-4">
    <div
      v-for="{ as, name, label, ...attrs } in schema.fields"
      :key="name"
      class="flex gap-2 py-2 items-center"
    >
      <label
        class="w-28"
        :for="name"
        >{{ label }}</label
      >
      <Field
        :id="name"
        :as="as"
        :name="name"
        v-bind="attrs"
        class="bg-slate-700 outline-none border border-slate-500 px-3 py-1 rounded"
      ></Field>
      <ErrorMessage :name="name" />
    </div>
    <button class="bg-slate-700 px-3 py-2 rounded-full hover:bg-slate-600">
      Submit
    </button>
  </Form>
</template>
