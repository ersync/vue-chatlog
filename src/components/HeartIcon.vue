<script setup>
import {computed, ref, toRefs} from "vue"

const props = defineProps({
  liked: {type: Boolean, required: true}
})
const {liked} = toRefs(props)
const emit = defineEmits(['heartClick'])
const isAnimating = ref(false)
const heartStyles = computed(() => ({
  color: liked.value ? 'red' : 'transparent',
  stroke: liked.value ? 'red' : '#99987897'
}))

const handleHeartClick = () => {
  emit('heartClick')
  isAnimating.value = true // Set isAnimating to true when heart is clicked
  setTimeout(() => {
    isAnimating.value = false// Set isAnimating to false after 0.5s
  }, 500)
}
</script>

<template>
<span @click="handleHeartClick" :class="{ 'liked': liked, 'animating': isAnimating }"
      class="heart-icon inline-block cursor-pointer p-0.5 self-center">
      <svg :style="heartStyles" class="w-4 h-4 text-white transition-colors">
        <use xlink:href="#heart"></use>
      </svg>
    </span>
</template>

<style scoped>
.heart-icon {
  cursor: pointer;
  transition: transform 0.2s ease-in-out
}

.animating {
  animation: pulse 0.5s
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: 1
  }
  50% {
    transform: scale(1.4);
    opacity: 0.7
  }
  100% {
    transform: scale(1);
    opacity: 1
  }
}
</style>