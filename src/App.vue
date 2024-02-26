<script setup>
import ChatLog from "@/components/ChatLog.vue"
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
import messages from "@/data/messages.json"
import {reactive, ref} from "vue"


const messagesData = reactive(messages)

const senderColor = ref(null)
const receiverColor = ref(null)

const colorsReceived = ref(false)
const handleSenderColorClicked = (color) => {
  senderColor.value = color
}
const handleReceiverColorClicked = (color) => {
  receiverColor.value = color
}

const initiateColors = (colors) => {
  senderColor.value = colors[0]
  receiverColor.value = colors[1]
  colorsReceived.value = true
}
</script>

<template>
  <div class="text-white">
    <div class="min-h-screen" style="background: url('/background.jpg') 100% 100% / cover no-repeat">
      <div class="text-center">
        <TheHeader v-cloak sender="John" receiver="Mike" @sender-color-clicked="handleSenderColorClicked"
                   @receiver-color-clicked="handleReceiverColorClicked" @set-initial-colors="initiateColors"/>
        <div class="container">
          <div class="flex justify-center items-center pt-6 px-6 mb-2.5">
            <ChatLog v-if="colorsReceived" :logs="messagesData" :senderColor="senderColor"
                     :receiverColor="receiverColor"/>
          </div>
        </div>
        <TheFooter/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>