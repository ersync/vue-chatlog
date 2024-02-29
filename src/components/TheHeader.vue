<script setup>
import {computed, nextTick, onMounted, ref, watch} from "vue"
import ColorPicker from "@/components/ColorPicker.vue";

const props = defineProps({
  sender: {type: String, required: true},
  receiver: {type: String, required: true},
})

// Defining color arrays for light and dark themes
const lightColors = ['#efefef', '#ff7f7a', '#ffe88c', '#ffffff', '#93cdff', '#aeddf8', '#a2eda8', '#debcf0',
  '#ff95c6']
const darkColors = [
  '#44556ea6', '#551c30b3', '#602061b3', '#000000ed', '#5b5b5b6b', '#370c24a3', '#265a5991', '#9952678a', '#4a265ba6']

const colors = ref(lightColors)
const initialSenderColor = ref(colors.value[0])
const initialReceiverColor = ref(colors.value[3])
const colorPickerVisible = ref(false)

// Watch for changes in colors array and update initial colors
watch(colors, (newColors) => {
  initialSenderColor.value = (newColors[0]);
  initialReceiverColor.value = (newColors[3]);
});

const toggleColorPicker = () => {
  colorPickerVisible.value = !colorPickerVisible.value
}

// Emitting events
const emit = defineEmits(['senderColorClicked', 'receiverColorClicked', 'setInitialColors'])

// Methods to handle color selection and emit events
const handleSenderColorClick = (color) => {
  initialSenderColor.value = color
  emit('senderColorClicked', initialSenderColor.value)
}

const handleReceiverColorClick = (color) => {
  initialReceiverColor.value = color
  emit('receiverColorClicked', initialReceiverColor.value)
}

// Emit initial colors after Vue's nextTick
const emitInitialColors = () => {
  nextTick(() => {
    emit('setInitialColors', [initialSenderColor.value, initialReceiverColor.value])
  })
}

const applyTheme = (theme) => {
  if (theme === "dark") {
    colors.value = darkColors
    document.documentElement.classList.add("dark")
  } else {
    colors.value = lightColors
    document.documentElement.classList.remove("dark")
  }
}

// Toggle theme between light and dark
const toggleTheme = () => {
  const newTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark"
  localStorage.setItem("theme", newTheme)
  applyTheme(newTheme);
}

// Load user theme from localStorage and set colors array and html class accordingly
const loadUserTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "dark"
  applyTheme(savedTheme)
}

// Update theme and emit initial colors
const updateThemeAndEmitColors = () => {
  toggleTheme()
  emitInitialColors()
}

// Initialize theme and emit initial colors
const initializeThemeAndEmitColors = () => {
  loadUserTheme()
  emitInitialColors()
}

// Lifecycle hook to initialize colors
onMounted(() => {
  initializeThemeAndEmitColors()
})
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
        <span class="px-2 rounded-md py-1 inline-block text-zinc-800 dark:text-white"
              :style="{backgroundColor: initialSenderColor}">{{ sender }}
        </span>
        and
        <span class="px-2 rounded-md py-1 inline-block text-zinc-800 dark:text-white"
              :style="{backgroundColor: initialReceiverColor}">{{ receiver }}
        </span>
      </h1>
      <span class="relative flex items-center pt-1">
            <svg class="w-7 h-7 text-white"><use xlink:href="#heart"></use></svg>
            ️<span class="absolute -top-2 -right-2 text-sm font-GothamrndMedium">3</span>
          </span>
    </div>
    <transition name="fade" mode="out-in">
      <div v-show="colorPickerVisible" class="flex justify-center gap-x-14 mt-3.5 items-center">
        <!-- sender color picker -->
        <div>
          <h2 class="font-MadeTommyRegular"><span>{{ sender }}'s</span> color:</h2>
          <ColorPicker :active-color="initialSenderColor" :colors="colors"
                       @color-clicked="handleSenderColorClick"/>
        </div>
        <!-- toggle theme -->
        <button class="toggle-theme" @click="updateThemeAndEmitColors">
          <svg class="w-6 h-6">
            <use xlink:href="#moon"></use>
          </svg>
        </button>
        <!-- receiver color picker -->
        <div>
          <h2 class="font-MadeTommyRegular"><span>{{ receiver }}'s</span> color:</h2>
          <ColorPicker :active-color="initialReceiverColor" :colors="colors"
                       @color-clicked="handleReceiverColorClick"/>
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