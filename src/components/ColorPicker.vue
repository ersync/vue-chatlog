<script setup>
import {toRefs} from "vue";

const emit = defineEmits(['colorClicked'])
const props = defineProps({
  colors: {type: Array, required: true},
  activeColor: {type: String, required: true},
})

const handleColorClick = (color) => {
  emit('colorClicked', color)
}
</script>

<template>
  <ul class="flex justify-center flex-wrap gap-2 mt-2">
    <li v-for="color in colors" :key="color" @click="handleColorClick(color)"
        class="rounded-full border-[2.5px] border-transparent dark:border-zinc-800 cursor-pointer "
        :class="{ '!border-[2.5px] !border-rose-400 dark:!border-yellow-200': color === activeColor }">
      <div :style="{ backgroundColor: color }"
           class="w-5 h-5 rounded-full border-2 border-transparent cursor-pointer"
           :class="{ '!border-2 border-white dark:!border-0': color === activeColor }">
      </div>
    </li>
  </ul>
</template>

<style scoped>
</style>