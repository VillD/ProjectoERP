<script setup>
import { computed, ref } from 'vue'
import BaseButton from './BaseButton.vue'
// import UserAvatar from './UserAvatar.vue'
import BaseCard from './BaseCard.vue'
import TableCheckbox from './TableCheckbox.vue'

defineProps({
  checkable: Boolean
})
const clients = [
  {
    name: 'Daniel Hand',
    company: 'Laptop-Green',
    city: 'Trujillo',
    progress: 60,
    created: 'Jun 3, 2021'
  },
  {
    name: 'Olen Hand',
    company: 'Table-Green',
    city: 'Laredo',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Michel Hand',
    company: 'Chaid-Green',
    city: 'Florencia',
    progress: 50,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Lorenz Hand',
    company: 'Phone-Green',
    city: 'Larco',
    progress: 40,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Waldo Hand',
    company: 'Cielo-Green',
    city: 'Union',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Hugo Hand',
    company: 'Inka-Green',
    city: 'Emelyside',
    progress: 10,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Memo Hand',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  }
]
const isOrder = ref(false)
const emit = defineEmits(['orderArr'])

const orderValue = () => {
  const other = clients.reverse()
  for (let i = 0; i < other.length; i++) {
    console.log(other[i])
  }
}
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <th>Check</th>
        <th>Avatar</th>
        <th class="cursor-pointer">Name</th>
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
        <td class="flex justify-center items-center">
          <TableCheckbox />
        </td>
        <td></td>
        <td>{{ client.name }}</td>
        <td>{{ client.company }}</td>
        <td>{{ client.city }}</td>
        <td>
          <progress
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
<style>
thead {
  @apply hidden lg:table-header-group;
}

tr {
  @apply max-w-full block relative border-b-4 border-gray-100
    lg:table-row lg:border-b-0 dark:border-slate-800;
}

tr:last-child {
  @apply border-b-0;
}

td:not(:first-child) {
  @apply lg:border-l lg:border-t-0 lg:border-r-0 lg:border-b-0 lg:border-gray-100 lg:dark:border-slate-700;
}

th {
  @apply lg:text-left lg:p-3;
}

td {
  @apply flex justify-between text-right py-3 px-4 align-top border-b border-gray-100
    lg:table-cell lg:text-left lg:p-3 lg:align-middle lg:border-b-0 dark:border-slate-800;
}

td:last-child {
  @apply border-b-0;
}

tbody tr,
tbody tr:nth-child(odd) {
  @apply lg:hover:bg-gray-100 lg:dark:hover:bg-slate-700/70;
}

tbody tr:nth-child(odd) {
  @apply lg:bg-gray-50 lg:dark:bg-slate-800;
}

td:before {
  content: attr(data-label);
  @apply font-semibold pr-3 text-left lg:hidden;
}
progress {
  @apply h-3 rounded-full overflow-hidden;
}

progress::-webkit-progress-bar {
  @apply bg-blue-200;
}

progress::-webkit-progress-value {
  @apply bg-blue-500;
}

progress::-moz-progress-bar {
  @apply bg-blue-500;
}

progress::-ms-fill {
  @apply bg-blue-500 border-0;
}
</style>
