<script setup>
import { RouterLink, RouterView } from "vue-router";
import SignInBtn from "../components/SignInBtn.vue";
</script>

<template>
  <header class="container">
    <nav class="flex items-center my-4">
      <h1 class="text-black mr-auto">MOTO GO</h1>
      <ul class="flex items-center">
        <li class="">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="mx-3">
          <RouterLink to="/todo">行前清點</RouterLink>
        </li>
        <li>
          <SignInBtn />
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer
    class="absolute top-full left-0 right-0 -translate-y-full bg-black text-white text-center py-6"
  >
    <p>量力而為，開心騎乘</p>
  </footer>
</template>
