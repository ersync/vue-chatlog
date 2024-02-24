<script setup>
import {computed, ref, toRefs} from "vue";
import {DateTime} from "luxon";

const props = defineProps({
  time: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
})
const {time, position} = toRefs(props)
const timeObj = ref(DateTime.fromISO(time.value))
const formattedTime = computed(() => timeObj.value.toFormat('HH:mm'))
const relativeTime = computed(() => timeObj.value.toRelative())
</script>

<template>
  <span :class="{'right-1': position === 'ltr', 'left-1': position === 'rtl'}"
        class="inline-block text-[7px] text-black/40 hover:text-black/80 absolute -bottom-[22px] py-1 transition-colors select-none"
        :time="formattedTime">{{ formattedTime }}</span>
</template>

<style scoped>

</style>