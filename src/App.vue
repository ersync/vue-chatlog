<script setup>
import ChatLog from "@/components/ChatLog.vue"
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
import messages from "@/data/messages.json"

import {computed, reactive, ref} from "vue"


const messagesLog = reactive(messages)

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

const likedCounter = computed(function () {
  return messagesLog.reduce((a, b) => a += +b.liked, 0)
})
</script>

<template>
  <div class="text-white">
    <div class="h-full background bg-repeat">
      <div class="text-center">
        <TheHeader v-cloak :sender="messagesLog[0].writer" :receiver="messagesLog[1].writer"
                   @sender-color-clicked="handleSenderColorClicked"
                   @receiver-color-clicked="handleReceiverColorClicked" @set-initial-colors="initiateColors"
                   :likedCounter="likedCounter"/>
        <div class="container">
          <div class="flex justify-center items-center pt-6 px-3 xs:px-6 mb-2.5">
            <ChatLog v-if="colorsReceived" :messagesLog="messagesLog" :senderColor="senderColor"
                     :receiverColor="receiverColor"/>
          </div>
        </div>
        <TheFooter/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -2065px 0;
  }
}

.background {
  min-height: 100vh;
  height: 100%;
  background: url('/background.jpg') repeat-x;
  background-size: cover;
  //animation: animatedBackground 12s linear infinite;
}

.dark .background {
  min-height: 100vh;
  height: 100%;
  background: url('/background-dark.jpg') repeat-x;
  background-size: cover;
  //animation: animatedBackground 12s linear infinite;
}

</style>