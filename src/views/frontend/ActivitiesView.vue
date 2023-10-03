<script setup>
import { ref } from "vue";
import { NIcon } from "naive-ui";
import { Star, Flag } from "@vicons/ionicons5";
import { apiGetActivities } from "@/apis/Activities.js";
// 活動資料
const activities = ref([]);
const getActivities = async () => {
  const { data } = await apiGetActivities();
  activities.value = data.data;
};
getActivities();
</script>
<template>
  <!-- 路騎活動 -->
  <section class="container py-10">
    <h2 class="text-3xl mb-6">活動</h2>
    <ul class="grid grid-cols-4 gap-6">
      <li v-for="activity in activities" :key="activity._id" class="relative pb-5">
        <div class="flex justify-between items-center">
          <h3 class="text-xl mb-1">{{ activity.name }}</h3>
          <span v-for="(tag, index) in activity.tags" :key="tag + index" class="ml-auto mr-3 text-white bg-primary rounded-lg px-2">{{ tag }}</span>
          <span class="text-white bg-gray rounded-lg px-2">{{ activity.type }}</span>
        </div>
        <RouterLink :to="'/activities/' + activity._id">
          <img :src="activity.imageUrl" alt="" class="w-full h-[400px] object-cover object-top rounded-lg mb-2" />
        </RouterLink>
        <p class="line-clamp-3 text-sm mb-2">{{ activity.description }}</p>
        <div class="absolute bottom-0 left-0 flex items-center">
          <div class="flex items-center mr-5">
            <n-icon size="16" :component="Star" class="mr-1 text-primary" />
            <span>4.5</span>
          </div>
          <div class="flex items-center">
            <n-icon size="16" :component="Flag" class="mr-1 text-primary" />
            <span>3,234</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<style></style>
