<script setup>
import TimeStamp from "@/components/TimeStamp.vue";
import ChatEntry from "@/components/ChatEntry.vue";
import ChatLog from "@/components/ChatLog.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <div class="text-white">
    <div class="min-h-screen" style="background: url('/background.jpg') 100% 100% / cover no-repeat">
      <TheHeader/>
      <div class="container">
        <div class="pt-6 px-6">
          <div class="flex justify-center items-center gap-y-6 flex-col">
            <ChatLog/>
            <div class="font-GothamRndMedium text-sm"><p>Created By Emad Rahimi ©️ 2024</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>