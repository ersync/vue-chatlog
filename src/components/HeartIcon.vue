<script setup>
import {computed, toRefs} from "vue";

const props = defineProps({
  liked: {type: Boolean, required: true}
})
const {liked} = toRefs(props)

const heartStyles = computed(() => ({
  color: liked.value ? 'red' : 'transparent',
  stroke: liked.value ? 'red' : 'rgba(255,255,255,0.5)'
}))
</script>

<template>
<span class="inline-block cursor-pointer p-0.5 self-center">
      <svg :style="heartStyles" class="w-4 h-4 text-white">
        <use xlink:href="#heart"></use>
      </svg>
    </span>
</template>

<style scoped>

</style>