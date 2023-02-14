<script setup>
import { RouterLink, RouterView } from "vue-router";
import SignInBtn from "@/components/SignInBtn.vue";
</script>

<template>
  <header class="container">
    <nav class="flex items-center my-4">
      <h1 class="text-black mr-auto text-2xl leading-normal">
        <RouterLink to="/">MOTO GO</RouterLink>
      </h1>
      <ul class="flex items-center">
        <li
          class="mx-3 border-b border-white hover:border-b hover:border-green-500"
        >
          <RouterLink to="/todo">行前清點</RouterLink>
        </li>
        <li
          class="mx-3 border-b border-white hover:border-b hover:border-green-500"
        >
          <RouterLink to="/routes">所有路線</RouterLink>
        </li>
        <li
          class="mx-3 border-b border-white hover:border-b hover:border-green-500"
        >
          <RouterLink to="/activities">路騎活動</RouterLink>
        </li>
        <!-- <li
          class="mx-3 border-b border-white hover:border-b hover:border-green-500"
        >
          <RouterLink to="/share">我要分享</RouterLink>
        </li> -->
        <li class="ml-3">
          <SignInBtn />
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer
    class="absolute top-full left-0 right-0 bg-black text-white text-center py-6"
  >
    <p>量力而為，開心騎乘</p>
  </footer>
</template>
