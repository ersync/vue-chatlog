<script setup>
import ChatEntry from "@/components/ChatEntry.vue";
import messages from "@/data/messages.json";
import {reactive, ref} from "vue";

const messagesData = reactive(messages);
const handleHeartClick = (msg) => {
  msg.liked = !msg.liked
}
</script>

<template>
  <div class="iphone-bg flex justify-end pr-3.5">
    <div
        class="pt-[70px] pr-2.5 w-[330px] h-[614px] text-zinc-950 cursor-grab active:cursor-grabbing">
      <div class="text-start h-full">
        <!-- chat header -->
        <div class="text-zinc-600 flex justify-start items-center gap-2 mb-4 mx-7">
          <svg class="w-3 h-3 mt-0.5">
            <use xlink:href="#chevron-left"></use>
          </svg>
          <span class="inline-block font-MadeTommyRegular text-2xl text-zinc-700">Chats</span>
        </div>
        <!-- chat body -->
        <div class="scrollable-wrapper h-[495px] max-h-[495px] overflow-y-auto h-full">
          <ul class="scrollable-content flex flex-col gap-y-8 h-full pl-6 pr-3 ">
            <template v-for="(msg,index) in messagesData" :key="index">
              <div>
                <ChatEntry v-if="msg.sender === 'Alice'" direction="ltr" v-bind="msg" color="#f2f5c5"
                           @toggleHeart="handleHeartClick(msg)"/>
                <ChatEntry v-else direction="rtl" v-bind="msg" color="#fafafa"
                           @toggleHeart="handleHeartClick(msg)"/>
              </div>
            </template>
          </ul>
        </div>
      </div>
      <div
          class="relative bg-blue-200 rounded-full w-5/6 text-gray-500/90 font-LonieLight text-left text-xs py-4 px-10 ml-8"
          style="background-color: rgba(244,245,252,0.5)">
        <svg class="h-3.5 w-3.5 absolute left-4 bottom-4 opacity-80 text-gray-500/80 ">
          <use xlink:href="#attachment"></use>
        </svg>
        <span>Type a message...</span>
        <svg class="w-8 h-8 absolute right-3 bottom-1.5">
          <use xlink:href="#paper-airplane"></use>
        </svg>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>