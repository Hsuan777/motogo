<script setup>
import { RouterLink } from "vue-router";
import { NButton, NInputGroup, NInput, NIcon } from "naive-ui";
import { Search } from "@vicons/ionicons5";
</script>

<template>
  <!-- Banner -->
  <figure
    class="relative flex flex-col justify-center items-center h-[400px] mb-24 pb-1"
  >
    <h2 class="text-5xl text-white mb-8">開始你的騎行之旅</h2>
    <n-input-group class="flex justify-center mb-5">
      <n-input
        :style="{ width: '25%' }"
        size="large"
        placeholder="想去哪裡呢？"
        class="rounded-lg"
      />
      <n-button type="primary" size="large" class="bg-green-600 rounded-lg">
        <n-icon size="24" :component="Search" />
      </n-button>
    </n-input-group>
    <RouterLink to="/routes" class="text-white">隨機一個 GO!</RouterLink>
    <img
      class="absolute inset-0 w-full object-center object-cover h-full -z-10"
      type="image"
      src="@/assets/images/banner.avif"
      alt="banner"
    />
  </figure>
  <div class="container">
    <!--  熱門路線 -->
    <section>
      <h2 class="text-3xl mb-6">熱門路線</h2>
    </section>
    <!-- 推薦路線 -->
    <section>
      <h2 class="text-3xl mb-6">推薦路線</h2>
    </section>
    <!-- 路騎活動 -->
    <section>
      <h2 class="text-3xl mb-6">路騎活動</h2>
    </section>
  </div>
  <!-- About -->
  <section class="flex h-[312px] bg-gray-200">
    <div class="container flex">
      <div class="w-1/3 flex flex-col justify-center">
        <h2 class="text-3xl mb-6">
          透過 MOTO GO，你可以探索各種路線與路騎活動。
        </h2>
        <p class="mb-6">
          摩托車，台灣最多人擁有的車種，但它不只是短途通勤的工具，也是出門的最佳夥伴。有了目的，再跨上摩托車，你會發現不一樣的自己，不論排氣量，只要享受與車子前進的時光就行。
        </p>
        <n-button type="primary" size="" class="w-1/6 bg-green-600 rounded">
          GO~
        </n-button>
      </div>
      <img
        class="w-full object-contain"
        type="image"
        src="@/assets/images/about-picture.avif"
        alt="about"
      />
    </div>
  </section>
</template>
