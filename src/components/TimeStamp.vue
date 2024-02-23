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
const formattedTime = computed(() => timeObj.value.toFormat('yyyy-MM-dd HH:mm'))
const relativeTime = computed(() => timeObj.value.toRelative())
</script>

<template>
  <span :class="{'-right-2': position === 'right', '-left-2': position === 'left'}"
        class="inline-block text-[7px] text-black/40 hover:text-black/80 absolute -bottom-1 py-1 transition-colors select-none"
        :time="formattedTime">{{ relativeTime }}</span>
</template>

<style scoped>

</style>