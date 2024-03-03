<script setup>
import {onMounted, toRefs} from "vue";

const emit = defineEmits(['colorClicked'])
const props = defineProps({
  colors: {type: Array, required: true},
  activeColor: {type: String, required: true},
  senderColor: {type: String},
  receiverColor: {type: String},
})

const validateColors = () => {
  if (!props.senderColor && !props.receiverColor) {
    console.warn('At least one of senderColor or receiverColor should be provided.');
  }
}

const {colors, activeColor, senderColor, receiverColor} = toRefs(props)

const handleColorClick = (color) => {
  if (color !== senderColor.value && color !== receiverColor.value) {
    emit('colorClicked', color);
  }
}

onMounted(() => {
  validateColors()
})
</script>

<template>
  <ul class="flex justify-center flex-wrap gap-2 mt-2">
    <template v-for="color in colors" :key="color">
      <li @click="handleColorClick(color)"
          class="rounded-full border-[2.5px] border-transparent dark:border-zinc-700 cursor-pointer"
          :class="{ '!border-[2.5px] !border-rose-400 dark:!border-yellow-200': color === activeColor }">
        <div :style="{ backgroundColor: color }"
             class="w-3 h-3 fhd-xs:w-5 fhd-xs:h-5 rounded-full border-2 border-transparent cursor-pointer"
             :class="{ '!border-2 border-white dark:!border-0': color === activeColor }">
        </div>
      </li>
    </template>
  </ul>
</template>

<style scoped>
</style>