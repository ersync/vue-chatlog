<script setup>
import TimeStamp from "@/components/TimeStamp.vue";
import ChatEntry from "@/components/ChatEntry.vue";
import ChatLog from "@/components/ChatLog.vue";
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
          <ChatLog/>
          <div class="font-GothamrndMedium text-sm "><p>Created By Emad Rahimi ©️ 2024</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>