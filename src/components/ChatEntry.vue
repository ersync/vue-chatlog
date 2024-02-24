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
const {body, sender, liked, timeStamp, direction, color} = toRefs(props)

const heartStyles = computed(() => ({
  color: liked.value ? 'red' : 'white',
  stroke: liked.value ? 'red' : 'rgba(0,0,0,0.2)'
}))

const containerClasses = computed(() => ({
  'flex-row-reverse': direction.value === 'rtl'
}))

const shadowClasses = computed(() => ({
  'shadow-lightRight': direction.value === 'ltr',
  'shadow-lightLeft': direction.value === 'rtl'
}))

const profileClasses = computed(() => ({...shadowClasses.value}))

const bodyClasses = computed(() => ({
  ...shadowClasses.value,
  'rounded-l-2xl': direction.value === 'rtl',
  'rounded-r-2xl': direction.value === 'ltr'
}))

function shadeColor(color, percent) {

  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  R = Math.round(R)
  G = Math.round(G)
  B = Math.round(B)

  var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
  var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
  var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

  return "#" + RR + GG + BB;
}

const darkenColor = computed(() => {
  console.log(shadeColor(color.value, -15))
  return shadeColor(color.value, -15);
})
</script>

<template>
  <li :class="containerClasses" class="flex justify-start items-end gap-x-2 mt-8">
    <div :class="profileClasses" :style="{ backgroundColor: color }"
         class="w-8 h-8 rounded-full shrink-0 flex justify-center items-center text-[10px]">
      {{ sender[0].toUpperCase() }}
    </div>
    <div :class="bodyClasses" :style="{ backgroundColor: color }"
         class="message-body relative max-w-[173px] max-h-min rounded-t-2xl transition-colors text-[11px] px-3 py-2 leading-4">
      <span class="font-LunasimaRegular">{{ body }}</span>
      <TimeStamp :time="timeStamp" :direction="direction"/>
    </div>
    <span class="inline-block cursor-pointer p-0.5 self-center">
      <svg :style="heartStyles" class="w-4 h-4 text-white">
        <use xlink:href="#heart"></use>
      </svg>
    </span>
  </li>
</template>

<style scoped lang="scss">
.message-body {
  &:hover {
    background: v-bind('darkenColor') !important;
  }
}
</style>