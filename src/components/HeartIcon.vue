<script setup>
import {computed, toRefs} from "vue";

const props = defineProps({
  liked: {type: Boolean, required: true}
})
const {liked} = toRefs(props)
const emit = defineEmits(['heartClick'])

const heartStyles = computed(() => ({
  color: liked.value ? 'red' : 'transparent',
  stroke: liked.value ? 'red' : '#b9a4a097'
}))

const handleHeartClick = () => {
  emit('heartClick')
}
</script>

<template>
<span @click="handleHeartClick()" class="inline-block cursor-pointer p-0.5 self-center">
      <svg :style="heartStyles" class="w-4 h-4 text-white transition-colors">
        <use xlink:href="#heart"></use>
      </svg>
    </span>
</template>

<style scoped>

</style>