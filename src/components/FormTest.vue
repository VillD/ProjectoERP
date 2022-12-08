<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

function onSubmit(value) {
  console.log(JSON.stringify(value, null, 2))
  // console.log('Submitting :(')
}
function validateEmail(value) {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}
</script>
<template>
  <Form
    action=""
    class="inline-flex flex-col gap-4 p-4"
    @submit="onSubmit"
  >
    <Field
      name="email"
      type="email"
      class="bg-slate-700 outline-none border border-slate-400 px-3 py-2 rounded"
      :rules="validateEmail"
    />
    <ErrorMessage name="email" />
    <Field
      name="number  "
      type="email"
      class="bg-slate-700 outline-none border border-slate-400 px-3 py-2 rounded"
    />
    <button class="p-2 border border-slate-400 hover:bg-slate-600 rounded-full">
      Sign up for newsletter
    </button>
  </Form>
</template>
