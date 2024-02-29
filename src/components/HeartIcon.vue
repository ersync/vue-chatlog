<script setup>
import {computed, ref, toRefs} from "vue"

const props = defineProps({
  liked: {type: Boolean, required: true}
})
const {liked} = toRefs(props)
const emit = defineEmits(['heartClick'])
const isAnimating = ref(false)

const handleHeartClick = () => {
  emit('heartClick')
  isAnimating.value = true
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}
</script>

<template>
<span @click="handleHeartClick" :class="{ 'liked': liked, 'animating': isAnimating }"
      class="heart-icon inline-block cursor-pointer p-0.5 self-center text-transparent">
      <svg
          :class="{'stroke-[#ff4646] text-[#ff4646]': liked, 'text-transparent stroke-[#aead8f75] dark:stroke-[#4f4f4f91]': !liked}"
          class="w-4 h-4 transition-all">
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