<script setup>
import FormData from '@/components/FormData.vue'
import * as Yup from 'yup'

const formSchema = {
  fields: [
    {
      label: 'Your name',
      name: 'name',
      as: 'input',
      type: 'text',
      rules: Yup.string().required()
    },
    {
      label: 'Your email',
      name: 'email',
      as: 'input',
      rules: Yup.string().email().required()
    },
    {
      label: 'Your password',
      name: 'password',
      as: 'input',
      type: 'password',
      rules: Yup.string().min(6).required()
    }
  ]
}
</script>
<template>
  <FormData :schema="formSchema"></FormData>
</template>
