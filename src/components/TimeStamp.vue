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
    required: true,
    validator: (value) => ['ltr', 'rtl'].includes(value)
  }
})

const {time, direction} = toRefs(props)

// Computed property to format time in HH:mm format
const formattedTime = computed(() => DateTime.fromISO(time.value).toFormat('HH:mm'))

// Computed property to format time in a full date format
const fullFormattedTime = computed(() => DateTime.fromISO(time.value).toFormat('LLLL dd yyyy HH:mm'))

// Computed property to determine CSS classes based on direction
const timeStampClasses = computed(() => ({'right-1': direction.value === 'ltr', 'left-1': direction.value === 'rtl'}))
</script>

<template>
  <span :class="timeStampClasses"
        class="inline-block text-[7px] text-black/80 dark:text-zinc-500 absolute -bottom-[20px] py-1 transition-colors select-none"
        :time="fullFormattedTime">{{ formattedTime }}</span>
</template>

<style scoped>

</style>