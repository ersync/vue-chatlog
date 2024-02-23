<script setup>
</script>

<template>
  <div class="text-center text-white">
    <div class="h-screen" style="background: url('/background.jpg') 100% 100% / cover no-repeat">
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
          <div class="gradient-background pr-4 w-[330px] h-[660px] text-zinc-950 cursor-grab active:cursor-grabbing">
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
                <ul class="c h-[29rem] pl-8 pr-4">
                  <li class="relative flex justify-start items-start gap-x-2 mt-8">
                    <div
                        class="w-8 h-8 rounded-full bg-red-200 shrink-0 flex justify-center items-center text-xs shadow-lightRight">
                      V
                    </div>
                    <div
                        class="max-w-[186px] min-h-8 max-h-min rounded-xl bg-red-100 hover:bg-red-200 transition-colors text-[11px] px-3 py-1 leading-6 shadow-lightRight">
                      What's going on?
                    </div>
                    <span class="inline-block cursor-pointer p-0.5 self-center"><svg class="w-4 h-4 text-white"><use
                        xlink:href="#heart"></use></svg></span>
                    <span
                        class="inline-block text-[7px] text-black/40 hover:text-black/80 absolute -right-2 -bottom-1 py-1 transition-colors select-none">5 years ago</span>
                  </li>
                  <li class="relative flex justify-start flex-row-reverse items-start gap-x-2 mt-8">
                    <div
                        class="w-8 h-8 rounded-full bg-amber-200 shrink-0 flex justify-center items-center text-xs shadow-lightLeft">
                      E
                    </div>
                    <div
                        class="max-w-[186px] min-h-8 max-h-min rounded-xl bg-amber-100 hover:bg-amber-200 transition-colors text-[11px] px-3 py-1 leading-6 shadow-lightLeft">
                      Everything is fine! wbu?
                    </div>
                    <span class="inline-block cursor-pointer p-0.5 self-center"><svg class="w-4 h-4 text-white"><use
                        xlink:href="#heart"></use></svg></span>
                    <span
                        class="inline-block text-[7px] text-black/40 hover:text-black/80 absolute -left-2 -bottom-1 py-1 transition-colors select-none">5 years ago</span>
                  </li>
                  <li class="relative flex justify-start items-start gap-x-2 mt-8">
                    <div
                        class="w-8 h-8 rounded-full bg-red-200 shrink-0 flex justify-center items-center text-xs shadow-lightRight">
                      V
                    </div>
                    <div
                        class="max-w-[186px] min-h-8 max-h-min rounded-xl bg-red-100 hover:bg-red-200 transition-colors text-[11px] px-3 py-1 leading-6 shadow-lightRight">
                      I'm doing well! Thanks
                    </div>
                    <span class="inline-block cursor-pointer p-0.5 self-center"><svg class="w-4 h-4 text-white"><use
                        xlink:href="#heart"></use></svg></span>
                    <span
                        class="inline-block text-[7px] text-black/40 hover:text-black/80 absolute -right-2 -bottom-1 py-1 transition-colors select-none">5 years ago</span>
                  </li>
                  <li class="relative flex justify-start flex-row-reverse items-start gap-x-2 mt-8">
                    <div
                        class="w-8 h-8 rounded-full bg-amber-200 shrink-0 flex justify-center items-center text-xs shadow-lightLeft">
                      E
                    </div>
                    <div
                        class="max-w-[186px] min-h-8 max-h-min rounded-xl bg-amber-100 hover:bg-amber-200 transition-colors text-[11px] px-3 py-1 leading-6 shadow-lightLeft">
                      Just wanted to ask you something about the project.
                    </div>
                    <span class="inline-block cursor-pointer p-0.5 self-center"><svg class="w-4 h-4 text-white"><use
                        xlink:href="#heart"></use></svg></span>
                    <span
                        class="inline-block text-[7px] text-black/40 hover:text-black/80 absolute -left-2 -bottom-1 py-1 transition-colors select-none">5 years ago</span>
                  </li>

                </ul>
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