<script setup>
import BaseButton from './BaseButton.vue'
import UserAvatar from './UserAvatar.vue'
import BaseCard from './BaseCard.vue'

defineProps({
  checkable: Boolean
})
const clients = [
  {
    name: 'Howell Hand',
    company: 'Kiehn-Green',
    city: 'Emelyside',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Howell Hand',
    company: 'Kiehn-Green',
    city: 'Emelyside',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Howell Hand',
    company: 'Kiehn-Green',
    city: 'Emelyside',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Howell Hand',
    company: 'Kiehn-Green',
    city: 'Emelyside',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Howell Hand',
    company: 'Kiehn-Green',
    city: 'Emelyside',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Howell Hand',
    company: 'Kiehn-Green',
    city: 'Emelyside',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Howell Hand',
    company: 'Kiehn-Green',
    city: 'Emelyside',
    progress: 20,
    created: 'Mar 3, 2021'
  }
]
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <th>Check</th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Company</th>
        <th>City</th>
        <th>Progress</th>
        <th>Created</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(client, k) in clients"
        :key="k"
      >
        <td>
          <input
            type="checkbox"
            name=""
          />
        </td>
        <td class="border-b-0 lg:w-6 before:hidden">
          <!-- <UserAvatar
            username="Howell-Hand"
            avatar="/Howell-Hand"
          /> -->
        </td>
        <td>{{ client.name }}</td>
        <td>{{ client.company }}</td>
        <td>{{ client.city }}</td>
        <td class="lg:w-32">
          <progress
            class="flex w-2/5 self-center lg:w-full"
            :value="client.progress"
            max="100"
          ></progress>
        </td>
        <td>{{ client.created }}</td>
        <td>
          <BaseCard><font-awesome-icon icon="fa-solid fa-eye" /></BaseCard>
          <BaseCard type="danger"
            ><font-awesome-icon icon="fa-solid fa-trash-can"
          /></BaseCard>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    class="p-3 lg:px-6 border-t border-slate-800 justify-between items-center block md:flex"
  >
    <div class="grow-0">
      <BaseButton
        class="mr-3"
        type="dark"
        >1</BaseButton
      >
      <BaseButton
        class="mr-3"
        type="dark"
        >2</BaseButton
      >
      <BaseButton
        class="mr-3"
        type="dark"
        >3</BaseButton
      >
      <BaseButton
        class="mr-3"
        type="dark"
        >4</BaseButton
      >
    </div>
    <div>
      <span>Page 1 of 4</span>
    </div>
  </div>
</template>
