<script setup>
import {computed, ref, toRefs} from "vue";
import {DateTime} from "luxon";

const props = defineProps({
  time: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: true
  }
})
const {time, direction} = toRefs(props)
const timeObj = ref(DateTime.fromISO(time.value))
const formattedTime = computed(() => timeObj.value.toFormat('HH:mm'))
const fullFormattedTime = computed(() => timeObj.value.toFormat('LLLL dd yyyy HH:mm'))
const timeStampClasses = computed(() => {
  return {'right-1': direction.value === 'ltr', 'left-1': direction.value === 'rtl'}
})
</script>

<template>
  <span :class="timeStampClasses"
        class="inline-block text-[7px] text-black/40 hover:text-black/80 absolute -bottom-[22px] py-1 transition-colors select-none"
        :time="fullFormattedTime">{{ formattedTime }}</span>
</template>

<style scoped>

</style>