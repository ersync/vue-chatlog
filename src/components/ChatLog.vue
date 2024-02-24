<script setup>
import ChatEntry from "@/components/ChatEntry.vue";
import messages from "@/data/messages.json";
</script>

<template>
  <div
      class="iphone-svg pr-2.5 w-[330px] h-[660px] text-zinc-950 cursor-grab active:cursor-grabbing">
    <div class="x2 py-20 text-start h-full">
      <!-- chat header -->
      <div class="text-zinc-600 flex justify-start items-center gap-2 mb-4 mx-7">
        <svg class="w-3 h-3 mt-0.5">
          <use xlink:href="#chevron-left"></use>
        </svg>
        <span class="inline-block font-MadeTommyRegular text-2xl text-zinc-700">Chats</span>
      </div>
      <!-- chat body -->
      <div class="scrollable-wrapper overflow-y-auto">
        <ul class="scrollable-content h-[29rem] pl-6 pr-3">
          <template v-for="(msg,index) in messages" :key="msg.id">
            <ChatEntry v-if="msg.sender == 'Alice'" direction="ltr" v-bind="msg" color="#d1e6ff"/>
            <ChatEntry v-else direction="rtl" v-bind="msg" color="#eaeaea"/>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>