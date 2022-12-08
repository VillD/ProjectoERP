<script setup>
import { Field, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'
defineProps({
  name: String,
  type: String,
  label: String
})
</script>
<template>
  <Field
    :name="name"
    :type="type"
  />
  <label :for="name">{{ label }}</label>
  <ErrorMessage :name="name"></ErrorMessage>
</template>
