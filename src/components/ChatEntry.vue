<script setup>
import TimeStamp from "@/components/TimeStamp.vue";
import {computed, toRefs} from "vue";
import HeartIcon from "@/components/HeartIcon.vue";

const props = defineProps({
  body: {type: String, required: true},
  sender: {type: String, required: true},
  liked: {type: Boolean, required: true},
  timeStamp: {type: String, required: true},
  direction: {type: String, required: true},
  color: {type: String, required: true},
})
const {body, sender, liked, timeStamp, direction, color} = toRefs(props)

// Computed properties
const containerClasses = computed(() => ({'flex-row-reverse': direction.value === 'rtl'}))

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

function calculateShadeColor(color, percent) {

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

const ShadeColor = computed(() => {
  console.log(calculateShadeColor(color.value, -15))
  return calculateShadeColor(color.value, -15);
})
</script>
<template>
  <li :class="containerClasses" class="flex justify-start items-end gap-x-2 cursor-default">
    <!-- Profile Avatar -->
    <div :class="profileClasses" :style="{ backgroundColor: color }"
         class="w-8 h-8 rounded-full shrink-0 flex justify-center items-center text-[10px]">
      {{ sender[0].toUpperCase() }}
    </div>
    <!-- Message Body -->
    <div :class="bodyClasses" :style="{ backgroundColor: color }"
         class="message-body relative max-w-[173px] max-h-min rounded-t-2xl transition-colors duration-200 text-[11px] px-3 py-2 leading-4">
      <span class="font-LunasimaRegular">{{ body }}</span>
      <!-- TimeStamp Component -->
      <TimeStamp :time="timeStamp" :direction="direction"/>
    </div>
    <!-- Heart Icon -->
    <HeartIcon :liked="liked"/>
  </li>
</template>

<style scoped lang="scss">
.message-body {
  &:hover {
    background: v-bind('ShadeColor') !important;
  }
}
</style>