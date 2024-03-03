<script setup>
import ChatEntry from "@/components/ChatEntry.vue";

const handleHeartClick = (msg) => {
  msg.liked = !msg.liked
}
const props = defineProps({
  messagesLog: {type: Array, required: true},
  receiverColor: {type: String, required: true},
  senderColor: {type: String, required: true},
})
</script>

<template>
  <div
      class="iphone-bg flex justify-end w-[280px] xs:w-[400px] sm:w-[350px] fhd-sm:w-[560px] aspect-[0.76] dark:text-white backdrop-blur-[4px] shrink-0">
    <div
        class="flex flex-col shrink-0 justify-end w-[185px] xs:w-[264px] sm:w-[226px] fhd-sm:w-[370px] px-5 xs:px-6 sm:pl-[13px] sm:pr-[18px] fhd-sm:px-9 pb-4 xs:pb-6 sm:pb-6 fhd-sm:pb-6 text-zinc-800 dark:text-white cursor-grab active:cursor-grabbing">
      <div class="inline-flex shrink-0 justify-start items-center gap-2 mb-3 sm:mb-4 fhd-sm:mb-7 cursor-pointer">
        <svg class="w-3 h-3 mt-0.5 text-zinc-800 dark:text-white">
          <use xlink:href="#chevron-left"></use>
        </svg>
        <span class="inline-block font-MadeTommyRegular text-md xs:text-lg sm:text-sm fhd-sm:text-2xl">Chats</span>
      </div>
      <div class="scrollable-wrapper overflow-y-auto h-[240px] xs:h-[360px] sm:h-[300px] fhd-sm:h-[500px] text-left">
        <ul class="scrollable-content flex flex-col gap-y-5 sm:gap-y-7 h-full text-[5px] xs:text-[8px] sm:text-[7px] fhd-sm:text-[11px]">
          <template v-for="(msg,index) in messagesLog" :key="index">
            <ChatEntry v-if="msg.writer === 'John'" direction="ltr" v-bind="msg" :color="senderColor"
                       @toggleHeart="handleHeartClick(msg)"/>
            <ChatEntry v-else direction="rtl" v-bind="msg" :color="receiverColor"
                       @toggleHeart="handleHeartClick(msg)"/>
          </template>
        </ul>
      </div>
      <div
          class="relative self-center rounded-full w-full text-gray-500/90 dark:text-gray-400/90 font-LonieLight text-left
            bg-[#f4f5fc80] dark:bg-[#1e363ea1] border border-[#8f8f8f33] dark:border-[#c3c3c313]">
        <svg
            class="h-2 w-2 sm:h-3 sm:w-3 absolute left-2 bottom-2 xs:left-3 xs:bottom-3.5 sm:left-2 sm:bottom-2.5 opacity-80 text-gray-500/80 dark:text-white cursor-pointer">
          <use xlink:href="#attachment"></use>
        </svg>
        <button @click.prevent="">
          <svg
              class="w-4 h-4 xs:w-6 xs:h-6 sm:w-6 sm:h-6 absolute right-3 bottom-1 xs:bottom-1.5 sm:bottom-1 text-blue-300/80 dark:text-[#1e363ea1] cursor-pointer">
            <use xlink:href="#paper-airplane"></use>
          </svg>
        </button>
        <input type="text" placeholder="Type a message..."
               class="inline-block w-full bg-transparent border border-transparent outline-0 rounded-full py-1.5 px-4 xs:py-3 xs:px-6 sm:px-6 sm:py-2 focus:border-amber-300/20 text-[7px] xs:text-[9px] sm:text-[9px]">
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>