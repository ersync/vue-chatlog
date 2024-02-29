<script setup>
import ChatEntry from "@/components/ChatEntry.vue";
import {reactive, ref, toRefs} from "vue";

const handleHeartClick = (msg) => {
  msg.liked = !msg.liked
}
const props = defineProps({
  logs: {type: Array, required: true},
  receiverColor: {type: String, required: true},
  senderColor: {type: String, required: true},
})
const {logs} = toRefs(props)
</script>

<template>
  <div class="iphone-bg flex justify-end pr-3.5 dark:text-white backdrop-blur-[1px]">
    <div
        class="flex flex-col pr-2.5 w-[330px] text-zinc-800 dark:text-white cursor-grab active:cursor-grabbing">
      <div class="flex flex-col h-[614px] justify-end text-start">
        <!-- chat header -->
        <div class="inline-flex justify-start items-center gap-2 mb-4 mx-7 cursor-pointer">
          <svg class="w-3 h-3 mt-0.5 text-zinc-800 dark:text-white">
            <use xlink:href="#chevron-left"></use>
          </svg>
          <span class="inline-block font-MadeTommyRegular text-2xl">Chats</span>
        </div>
        <!-- chat body -->
        <div class="scrollable-wrapper h-[505px] max-h-[505px] overflow-y-auto h-full">
          <ul class="scrollable-content flex flex-col gap-y-7 h-full pl-6 pr-3">
            <template v-for="(msg,index) in logs" :key="index">
              <div>
                <ChatEntry v-if="msg.sender === 'Alice'" direction="ltr" v-bind="msg" :color="senderColor"
                           @toggleHeart="handleHeartClick(msg)"/>
                <ChatEntry v-else direction="rtl" v-bind="msg" :color="receiverColor"
                           @toggleHeart="handleHeartClick(msg)"/>
              </div>
            </template>
          </ul>
        </div>
      </div>
      <div
          class="relative self-center ml-4 rounded-full w-5/6 text-gray-500/90 dark:text-gray-400/90 font-LonieLight text-left text-xs
            bg-[#f4f5fc80] dark:bg-[#1e363ea1] border border-[#8f8f8f33] dark:border-[#c3c3c313]">
        <svg
            class="h-3.5 w-3.5 absolute left-4 bottom-4 opacity-80 text-gray-500/80 dark:text-white cursor-pointer">
          <use xlink:href="#attachment"></use>
        </svg>
        <button @click.prevent="">
          <svg class="w-8 h-8 absolute right-3 bottom-1.5 text-blue-300/80 dark:text-[#1e363ea1] cursor-pointer">
            <use xlink:href="#paper-airplane"></use>
          </svg>
        </button>
        <input type="text" placeholder="Type a message..."
               class="inline-block bg-transparent border border-transparent outline-0 py-4 w-full rounded-full px-10 focus:border-amber-300/20">
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>