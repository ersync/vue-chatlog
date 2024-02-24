<script setup>

import ChatEntry from "@/components/ChatEntry.vue";
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
        <ul class="scrollable-content h-[27rem] pl-6 pr-3">

          <ChatEntry direction="ltr" time-stamp="2024-02-24T00:19:58+0000" :liked="false" sender="Robert"
                     body="What's going on?" color="#d1e6ff"/>
          <ChatEntry direction="rtl" time-stamp="2024-02-24T00:20:35+0000" :liked="true" sender="Sarah"
                     body="Everything is fine! wbu?"
                     color="#eaeaea"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>