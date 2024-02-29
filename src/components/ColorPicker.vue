<script setup>
import {toRefs} from "vue";

const emit = defineEmits(['colorClicked'])
const props = defineProps({
  colors: {
    type: Array,
    required: true
  },
  activeColor: {
    type: String,
    required: true
  },
})

const handleColorClick = (color) => {
  emit('colorClicked', color)
}
</script>

<template>
  <ul class="flex gap-2 mt-2">
    <li v-for="color in colors" :key="color" @click="handleColorClick(color)"
        :style="{ backgroundColor: color }"
        :class="{ '!border-[2.5px] !border-yellow-600 dark:!border-yellow-200': color === activeColor }"
        class="w-5 h-5 rounded-full border border-zinc-200/60 dark:border-zinc-700 cursor-pointer">
    </li>
  </ul>
</template>

<style scoped>

</style>