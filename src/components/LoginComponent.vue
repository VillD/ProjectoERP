<script setup>
import BaseButton from './BaseButton.vue'
import BaseCard from './BaseCard.vue'
import FormCheck from './FormCheck.vue'
import FormField from './FormField.vue'
import FormInput from './FormInput.vue'
</script>
<template>
  <div class="m-2 w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
    <BaseCard
      class="bg-slate-900/70 flex flex-col rounded"
      :form="true"
    >
      <template #body>
        <div class="">
          <FormField
            label="Login"
            help="Please enter your login"
          >
            <FormInput
              type="text"
              name="user"
              icon="fa-user"
            ></FormInput>
          </FormField>

          <FormField
            label="Password"
            help="Please enter your password"
          >
            <FormInput
              type="password"
              name="password"
              icon="fa-lock"
            ></FormInput>
          </FormField>

          <FormField>
            <FormCheck
              label-check="Remember"
              name="check"
            ></FormCheck>
          </FormField>
        </div>
      </template>

      <template #footer>
        <div class="flex gap-4">
          <BaseButton>Submit</BaseButton>
          <BaseButton outline="">Back</BaseButton>
        </div>
      </template>
    </BaseCard>
  </div>
</template>
