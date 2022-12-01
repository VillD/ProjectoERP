<script setup>
import { computed, ref } from 'vue'
import BaseButton from './BaseButton.vue'
// import UserAvatar from './UserAvatar.vue'
import BaseCard from './BaseCard.vue'
import BaseIcon from './BaseIcon.vue'
import TableCheckbox from './TableCheckbox.vue'

const props = defineProps({
  columns: {
    type: Array,
    default: null
  },
  entries: {
    type: Array,
    default: null
  },
  options: {
    type: Array,
    default: null
  },
  selectedOption: {
    type: Number,
    default: null
  },
  checkable: Boolean
})
const searchText = ref('')
const currentEntries = ref(5)

const checkedRows = ref([])

const searching = computed(() => {
  let { entries } = props
  if (searchText.value) {
    entries = entries.filter((item) => {
      return Object.keys(item).some((key) => {
        return (
          String(item[key])
            .toLowerCase()
            .indexOf(searchText.value.toLowerCase()) > -1
        )
      })
    })
  }
  // item.name.toLowerCase().indexOf(searchText.value.toLowerCase()) != -1
  return entries
})

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })
  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.name === client.name
    )
  }
}
</script>

<template>
  <div class="flex justify-between px-3 py-6">
    <div class="items-center">
      <span class="mr-2">Show:</span>
      <select
        v-model="currentEntries"
        class="bg-slate-700/70 rounded-lg p-1"
        @change="paginateEntries"
      >
        <option
          v-for="option in options"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <div class="w-1/4">
      <input
        v-model="searchText"
        type="text"
        class="bg-slate-700/70 rounded-lg py-1 px-2 w-full"
        placeholder="Search here"
      />
    </div>
  </div>
  <div
    v-if="checkedRows.length"
    class="p-3 bg-gray-100/50 dark:bg-slate-800"
  >
    <span
      v-for="(checkedRow, index) in checkedRows"
      :key="index"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>
  <div class="text-white"></div>
  <table class="w-full">
    <thead>
      <tr>
        <th />
        <th />
        <th
          v-for="(th, index) in props.columns"
          :key="index"
          class="cursor-pointer"
        >
          {{ th }}
          <BaseIcon
            class="ml-1 text-xs"
            name="fa-solid fa-sort"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(td, k) in searching"
        :key="k"
      >
        <td class="flex justify-center items-center">
          <TableCheckbox @checked="checked($event, td)" />
        </td>
        <td></td>
        <td>{{ td.name }}</td>
        <td>{{ td.company }}</td>
        <td>{{ td.city }}</td>
        <td>
          <progress
            :value="td.progress"
            max="100"
          ></progress>
        </td>
        <td>{{ td.created }}</td>
        <td class="flex justify-around pr-0">
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