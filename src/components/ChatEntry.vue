<script setup>
import TimeStamp from "@/components/TimeStamp.vue";
import {computed, toRefs} from "vue";
import HeartIcon from "@/components/HeartIcon.vue";

const props = defineProps({
  body: {type: String, required: true},
  writer: {type: String, required: true},
  liked: {type: Boolean, required: true},
  timeStamp: {type: String, required: true},
  direction: {type: String, required: true},
  color: {type: String, required: true},
})
const {body, sender, liked, timeStamp, direction, color} = toRefs(props)

const emit = defineEmits(['toggleHeart'])
const handleHeartClick = () => {
  emit('toggleHeart')
}

// Computed properties
const containerClasses = computed(
    () => ({
      'flex-row-reverse': direction.value === 'rtl',
      'self-end': direction.value === 'rtl',
      'self-start': direction.value === 'ltr'
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

</script>
<template>
  <li :class="containerClasses" class="inline-flex justify-start gap-x-1 xs:gap-x-2 cursor-default items-end">
    <!-- Profile Avatar -->
    <div :class="profileClasses" :style="{ backgroundColor: color }"
         class="w-6 h-6 xs:w-7 xs:h-7 sm:w-6 sm:h-6 fhd-sm:w-7 fhd-sm:h-7 rounded-full shrink-0 flex justify-center items-center duration-200">
      {{ writer[0].toUpperCase() }}
    </div>
    <!-- Message Body -->
    <div class="relative">
      <div :class="bodyClasses" :style="{ backgroundColor: color }"
           class="message-body max-h-min max-w-[127px] sm:max-w-[115px] fhd-sm:max-w-[187px] rounded-t-2xl transition-colors duration-200 px-1.5 py-1 xs:px-2 xs:py-1.5 sm:px-2 sm:py-1 fhd-sm:px-3 fhd-sm:py-2 leading-4">
        <span class="font-LunasimaRegular">{{ body }}</span>
      </div>
      <!-- TimeStamp Component -->
      <TimeStamp :time="timeStamp" :direction="direction"/>
    </div>
    <!-- Heart Icon -->
    <HeartIcon :liked="liked" @heartClick="handleHeartClick"/>
  </li>
</template>

<style scoped lang="scss">
</style>