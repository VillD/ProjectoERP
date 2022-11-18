<script setup>
import BaseIcon from './BaseIcon.vue';
import ButtonPill from './ButtonPill.vue'

const props = defineProps({
   amount:{
    type: Number,
    default:null
  },
  title:{
    type: [String, Number],
    default: null
  },
  color:{
    type:String,
    default: "primary"
  },
  date:{
    type:String,
    required:true
  },
  business:{
    type:String,
    required:true
  },
  iconWidget:{
    type:String,
    default: null
  },
  pillText:{
    type: String,
    default: null
  },
  typeTransaction:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  }
})
</script>
<template>
    <div class="w-full justify-between items-center md:flex md:flex-1">
        <!-- header -->
        <div class="justify-center flex mb-6 md:mb-0">
            <div class=" flex justify-center items-center md:mr-6 w-12 h-12 bg-slate-800 rounded-full ">
                <BaseIcon
                    :name="props.iconWidget"
                    class=" w-6 h-6"
                    :class="`text-${color}`"
                />
                
            </div>
        </div>

        <div class="flex flex-col flex-1 mb-6 md:mb-0 items-center md:items-start">
            <span class="text-xl space-x-1 text-white">${{props.amount}}</span>
            <p class="text-slate-400">
                <b>{{ props.date }} </b> {{ business }}
            </p>
        </div>
        <!-- footer -->

        <div class=" space-y-2 text-center md:text-right">
            <p class="text-sm text-gray-500">
                {{ props.name }}
            </p>
            <div>
                <ButtonPill 
                    :class="`bg-${color}`" :label="props.typeTransaction" small />
            </div>
        </div>
    </div>

</template>