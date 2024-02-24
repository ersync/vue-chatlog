<script setup>
import TimeStamp from "@/components/TimeStamp.vue";
import {computed, toRefs} from "vue";

const props = defineProps({
  body: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  liked: {
    type: Boolean,
    required: true
  },
  timeStamp: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: true
  },
  color: {
    type: String,
  }
})
const {body, sender, liked, timeStamp, direction, color} = toRefs(props);

const heartStyles = computed(() => ({
  color: liked.value ? 'red' : 'white',
  stroke: liked.value ? 'red' : 'rgba(0,0,0,0.2)'
}));

const containerClasses = computed(() => ({
  'flex-row-reverse': direction.value === 'rtl'
}));

const shadowClasses = computed(() => ({
  'shadow-lightRight': direction.value === 'ltr',
  'shadow-lightLeft': direction.value === 'rtl'
}));

const profileClasses = computed(() => ({...shadowClasses.value}));

const bodyClasses = computed(() => ({
  ...shadowClasses.value,
  'rounded-l-2xl': direction.value === 'rtl',
  'rounded-r-2xl': direction.value === 'ltr'
}));
</script>

<template>
  <li :class="containerClasses" class="flex justify-start items-end gap-x-2 mt-8">
    <div :class="profileClasses" :style="{ backgroundColor: color }"
         class="w-8 h-8 rounded-full shrink-0 flex justify-center items-center text-[10px]">
      {{ sender[0].toUpperCase() }}
    </div>
    <div :class="bodyClasses" :style="{ backgroundColor: color }"
         class="relative max-w-[166px] max-h-min rounded-t-2xl transition-colors text-[11px] px-3 py-2 leading-4">
      <span class="font-LonieLight">{{ body }}</span>
      <TimeStamp :time="timeStamp" :position="direction"/>
    </div>
    <span class="inline-block cursor-pointer p-0.5 self-center">
      <svg :style="heartStyles" class="w-4 h-4 text-white">
        <use xlink:href="#heart"></use>
      </svg>
    </span>
  </li>
</template>

<style scoped>
</style>