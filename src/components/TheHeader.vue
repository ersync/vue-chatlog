<script setup>
import {computed, onMounted, ref} from "vue"

const props = defineProps({
  sender: {type: String, required: true},
  receiver: {type: String, required: true},
})

// Color array
const colors = ['#efefef', '#ff7f7a', '#ffe88c', '#ffffff', '#93cdff', '#aeddf8', '#a2eda8', '#debcf0',
  '#ff95c6']

const senderColor = ref('#ffffff')
const receiverColor = ref('#efefef')
const colorPickerVisible = ref(false)

const toggleColorPicker = () => {
  colorPickerVisible.value = !colorPickerVisible.value
}

// Emitting events
const emit = defineEmits(['senderColorClicked', 'receiverColorClicked', 'setInitialColors'])

// Methods to handle color selection
const handleSenderColorClick = (event, color) => {
  senderColor.value = color
  emit('senderColorClicked', senderColor.value)
}

const handleReceiverColorClick = (color) => {
  receiverColor.value = color
  emit('receiverColorClicked', receiverColor.value)
}

const handleInitialColors = () => {
  emit('setInitialColors', [senderColor.value, receiverColor.value])
}
// Lifecycle hook to initialize colors
onMounted(() => handleInitialColors())
</script>

<template>
  <div class="p-[18px] bg-black/20 backdrop-blur-2xl">
    <div class="flex gap-x-16 text-2xl justify-center items-center ">
      <button @click="toggleColorPicker">
        <img
            src="/color-palette.png"
            class="w-8 h-8 transform -scale-x-100" alt="">
      </button>
      <h1 class="font-LonieBold">Chat between
        <span class="px-2 rounded-md py-1 inline-block text-zinc-800"
              :style="{backgroundColor: senderColor}">{{ sender }}
        </span>
        and
        <span class="px-2 rounded-md py-1 inline-block text-zinc-800"
              :style="{backgroundColor: receiverColor}">{{ receiver }}
        </span>
      </h1>
      <span class="relative flex items-center pt-1">
            <svg class="w-7 h-7 text-white"><use xlink:href="#heart"></use></svg>
            ️<span class="absolute -top-2 -right-2 text-sm font-GothamrndMedium">3</span>
          </span>
    </div>
    <transition name="fade" mode="out-in">
      <div id="color-palette" v-if="colorPickerVisible" class="flex justify-center gap-x-14 mt-3.5 items-center">
        <!-- sender color picker -->
        <div>
          <h2 class="font-bold"><span>{{ sender }}'s</span> color:</h2>
          <ul class="flex gap-2 mt-2">
            <li v-for="color in colors" :key="color" @click="handleSenderColorClick($event,color)"
                :style="{ backgroundColor: color}" :class="{ '!border-[2.5px] !border-white': color === senderColor }"
                class="w-5 h-5 rounded-full border border-zinc-300 cursor-pointer"></li>
          </ul>
        </div>
        <!-- toggle theme -->
        <div>
          <svg class="w-6 h-6">
            <use xlink:href="#moon"></use>
          </svg>
        </div>
        <!-- receiver color picker -->
        <div>
          <h2 class="font-bold"><span>{{ receiver }}'s</span> color:</h2>
          <ul class="flex gap-2 mt-2">
            <li v-for="color in colors" :key="color" @click="handleReceiverColorClick(color)"
                :style="{ backgroundColor: color }"
                :class="{ '!border-[2.5px] !border-white': color === receiverColor }"
                class="w-5 h-5 rounded-full border border-zinc-300 cursor-pointer"></li>
          </ul>
        </div>
      </div>
    </transition>
  </div>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.1s ease;

}
</style>