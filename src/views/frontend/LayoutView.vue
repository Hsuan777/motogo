<script setup>
import { RouterLink, RouterView } from "vue-router";
import { NIcon } from "naive-ui";
import { SportsMotorsportsFilled } from "@vicons/material";
import SignInModal from "@/components/modal/SignIn.vue";
</script>

<template>
  <header class="container">
    <nav class="flex items-center my-4">
      <div class="flex items-center mr-auto">
        <n-icon size="40" :component="SportsMotorsportsFilled" class="mr-1" />
        <h1 class="text-black text-2xl italic leading-normal">
          <RouterLink to="/">MOTO GO</RouterLink>
        </h1>
      </div>
      <ul class="flex items-center">
        <li class="mx-3 border-b border-white hover:border-b hover:border-green-500">
          <RouterLink to="/itineraries">所有路線</RouterLink>
        </li>
        <li class="mx-3 border-b border-white hover:border-b hover:border-green-500">
          <RouterLink to="/activities">路騎活動</RouterLink>
        </li>
        <li class="ml-3">
          <SignInModal />
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="absolute top-full left-0 right-0 bg-gray-dark text-white text-center py-6">
    <p>量力而為，開心騎乘</p>
    <p class="text-sm text-gray">Copyright©此網站資訊與圖片版權為網路與各大社群所有，純個人作品分享，無盈利</p>
  </footer>
</template>
