<script setup>
import TimeStamp from "@/components/TimeStamp.vue";
import ChatEntry from "@/components/ChatEntry.vue";
</script>

<template>
  <div class="text-center text-white">
    <div class="h-full min-h-screen" style="background: url('/background.jpg') 100% 100% / cover no-repeat">
      <div class="p-[18px] bg-black/20 backdrop-blur-2xl">
        <div class="flex gap-x-16 text-2xl justify-center items-center ">
          <button class="">
            <svg class="w-6 h-6">
              <use xlink:href="#settings"></use>
            </svg>
          </button>
          <h1 class="cabin-600">Chat between <span>Vladimir</span> and <span>Estragon</span></h1>
          <span class="relative flex items-center pt-1">
            <svg class="w-7 h-7 text-white"><use xlink:href="#heart"></use></svg>
            ️<span class="absolute -top-2 -right-2 text-sm font-GothamrndMedium">3</span>
          </span>
        </div>
        <div class="hidden flex justify-center gap-x-14 pt-4 mt-3.5 items-center">
          <div>
            <h2 class="font-bold">Vladimir's color:</h2>
            <div class="flex gap-2 mt-2">
              <div class="w-5 h-5 bg-white rounded-full"></div>
              <div class="w-5 h-5 bg-red-400 rounded-full"></div>
              <div class="w-5 h-5 bg-orange-300 rounded-full"></div>
              <div class="w-5 h-5 bg-yellow-300 rounded-full"></div>
              <div class="w-5 h-5 bg-teal-300 rounded-full"></div>
              <div class="w-5 h-5 bg-green-400 rounded-full"></div>
              <div class="w-5 h-5 bg-purple-400 rounded-full"></div>
            </div>
          </div>
          <div>
            <svg class="w-6 h-6">
              <use xlink:href="#moon"></use>
            </svg>
          </div>
          <div>
            <h2 class="font-bold">Vladimir's color:</h2>
            <div class="flex gap-2 mt-2">
              <div class="w-5 h-5 bg-white rounded-full"></div>
              <div class="w-5 h-5 bg-red-400 rounded-full"></div>
              <div class="w-5 h-5 bg-orange-300 rounded-full"></div>
              <div class="w-5 h-5 bg-yellow-300 rounded-full"></div>
              <div class="w-5 h-5 bg-teal-300 rounded-full"></div>
              <div class="w-5 h-5 bg-green-400 rounded-full"></div>
              <div class="w-5 h-5 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto pt-6 px-6">
        <div class="flex justify-center items-center gap-y-6 flex-col">
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
              <div class="w overflow-y-auto">
                <ul class="c h-[27rem] pl-6 pr-3">
                  <ChatEntry direction="ltr" time-stamp="2024-02-24T00:19:58+0000" :liked="false" sender="Robert"
                             body="What's going on?" color="#d1e6ff"/>
                  <ChatEntry direction="rtl" time-stamp="2024-02-24T00:20:35+0000" :liked="true" sender="Sarah"
                             body="Everything is fine! wbu?"
                             color="#eaeaea"/>
                </ul>
              </div>
              <div
                  class="relative bg-blue-200 rounded-full w-5/6 text-gray-500/90 font-LonieLight text-xs py-4 px-10 ml-8"
                  style="background-color: rgba(244,245,252,1)">
                <svg class="h-3.5 w-3.5 absolute left-4 bottom-4 opacity-80 text-gray-500/80">
                  <use xlink:href="#attachment"></use>
                </svg>
                <span>Type a message...</span>
                <svg class="w-8 h-8 absolute right-3 bottom-1.5">
                  <use xlink:href="#paper-airplane"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="font-GothamrndMedium text-sm "><p>Created By Emad Rahimi ©️ 2024</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>