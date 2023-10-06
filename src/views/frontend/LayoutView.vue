<script setup>
import { RouterLink, RouterView } from "vue-router";
// import SignInModal from "@/components/modal/SignIn.vue";
</script>

<template>
  <header class="container">
    <nav class="flex items-center my-4">
      <div class="flex items-center mr-auto">
        <img src="/motor-helmet.png" alt="motor-helmet" class="w-10 h-10 mr-1" />
        <h1 class="text-black text-2xl italic leading-normal">
          <RouterLink to="/">MOTO GO</RouterLink>
        </h1>
      </div>
      <ul class="flex items-center">
        <li class="mx-3 border-b border-white hover:border-primary">
          <RouterLink to="/itineraries">所有路線</RouterLink>
        </li>
        <li class="mx-3 border-b border-white hover:border-primary">
          <RouterLink to="/activities">路騎活動</RouterLink>
        </li>
        <!-- <li class="ml-3">
          <SignInModal />
        </li> -->
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="absolute top-full left-0 right-0 bg-gray-dark text-white text-center py-6">
    <div class="flex justify-center items-center mb-3">
      <img src="/motor-helmet.png" alt="motor-helmet" class="w-10 h-10 mr-1" />
      <h1 class="text-white text-2xl italic leading-normal mr-3">
        <RouterLink to="/">MOTO GO</RouterLink>
      </h1>
      <ul class="flex">
        <li class="mx-3 border-b border-gray-dark hover:border-primary">
          <RouterLink to="/itineraries">所有路線</RouterLink>
        </li>
        <li class="mx-3 border-b border-gray-dark hover:border-primary">
          <RouterLink to="/activities">路騎活動</RouterLink>
        </li>
      </ul>
    </div>
    <p>量力而為，開心騎乘</p>
    <p class="text-sm text-gray">Copyright©此網站資訊與圖片版權為網路與各大社群所有，純個人作品分享，無盈利</p>
  </footer>
</template>
