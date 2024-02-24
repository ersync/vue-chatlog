<script setup>
import ChatLog from "@/components/ChatLog.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="text-white">
    <div class="min-h-screen" style="background: url('/background.jpg') 100% 100% / cover no-repeat">
      <div class="text-center">
        <TheHeader/>
        <div class="container">
          <div class="flex justify-center items-center pt-6 px-6 mb-6">
            <ChatLog/>
          </div>
        </div>
        <TheFooter/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>