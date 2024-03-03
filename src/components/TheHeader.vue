<script setup>
import {computed, nextTick, onMounted, ref, watch} from "vue"
import ColorPicker from "@/components/ColorPicker.vue";

const props = defineProps({
  sender: {type: String, required: true},
  receiver: {type: String, required: true},
  likedCounter: {type: Number, required: true},
})

// Defining color arrays for light and dark themes
const lightColors = ['#e4e3e3b4', '#ff7f7a', '#ffe88c', '#ff95c6', '#aeddf8', '#a2eda8', '#debcf0',
  '#ffffff']
const darkColors = [
  '#1e363eb1', '#551c30b3', '#602061b3', '#4a265ba6', '#5b5b5b6b', '#370c24a3', '#44556ea6', '#000000ed']

const colors = ref(lightColors)
const initialSenderColor = ref(colors.value[0])
const initialReceiverColor = ref(colors.value[7])
const colorPickerVisible = ref(false)

// Watch for changes in colors array and update initial colors
watch(colors, (newColors) => {
  initialSenderColor.value = (newColors[0]);
  initialReceiverColor.value = (newColors[7]);
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
  <div class="p-[12px] fhd:p-[18px] bg-black/20 backdrop-blur-2xl">
    <div class="flex gap-x-16 text-md xs:text-xl leading-8 sm:text-xl fhd:sm:text-2xl justify-center items-center ">
      <button @click="toggleColorPicker" class="shrink-0">
        <img
            src="/color-palette.png"
            class="w-8 h-8 transform -scale-x-100" alt="">
      </button>
      <h1 class="font-LonieBold shrink-0">Chat between <br class="sm:hidden">
        <span class="px-2 rounded-md py-1 inline-block text-zinc-800 dark:text-white dark:border dark:border-zinc-800"
              :style="{backgroundColor: initialSenderColor}">{{ sender }}
        </span>
        and
        <span class="px-2 rounded-md py-1 inline-block text-zinc-800 dark:text-white dark:border dark:border-zinc-800"
              :style="{backgroundColor: initialReceiverColor}">{{ receiver }}
        </span>
      </h1>
      <span class="relative flex items-center shrink-0 pt-1">
            <svg class="w-5 h-5 fhd:w-7 fhd:h-7 text-white"><use xlink:href="#heart"></use></svg>
            ️<span class="absolute -top-2 -right-2 text-[12px] fhd:text-sm font-GothamrndMedium">{{
          likedCounter
        }}</span>
          </span>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="colorPickerVisible"
           class="flex justify-around gap-x-14 fhd:-mt-3 items-end text-sm fhd:sm:text-md antialiased">
        <!-- sender color picker -->
        <div>
          <h2 class="font-MadeTommyRegular"><span>{{ sender }}'s</span> color:</h2>
          <ColorPicker :active-color="initialSenderColor" :colors="colors"
                       @color-clicked="handleSenderColorClick" :receiver-color="initialReceiverColor"/>
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
                       @color-clicked="handleReceiverColorClick" :sender-color="initialSenderColor"/>
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