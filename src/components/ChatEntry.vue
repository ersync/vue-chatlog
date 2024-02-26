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

const emit = defineEmits(['toggleHeart'])
const handleHeartClick = () => {
  emit('toggleHeart')
}

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

</script>
<template>
  <li :class="containerClasses" class="flex justify-start items-end gap-x-2 cursor-default">
    <!-- Profile Avatar -->
    <div :class="profileClasses" :style="{ backgroundColor: color }"
         class="w-8 h-8 rounded-full shrink-0 flex justify-center items-center text-[10px] duration-200">
      {{ sender[0].toUpperCase() }}
    </div>
    <!-- Message Body -->
    <div class="relative">
      <div :class="bodyClasses" :style="{ backgroundColor: color }"
           class="message-body max-w-[173px] max-h-min rounded-t-2xl transition-colors duration-200 text-[11px] px-3 py-2 leading-4">
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
.message-body {
  &:hover {
    //background: v-bind('ShadeColor') !important;
  }
}
</style>