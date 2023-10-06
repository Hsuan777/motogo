<script setup>
import { ref } from "vue";
import router from "@/router";
import { apiGetActivity } from "@/apis/activities.js";

const activity = ref({});
const getActivity = async () => {
  const { data } = await apiGetActivity(router.currentRoute.value.params.id);
  activity.value = data.data;
};
getActivity();
window.scrollTo(0, 0);
</script>
<template>
  <div v-if="activity._id" class="bg-[url(https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)] bg-top">
    <div class="container flex justify-around items-center mb-40">
      <div>
        <span class="text-white bg-gray rounded-lg px-2 mr-3">{{ activity.type }}</span>
        <span v-for="(tag, index) in activity.tags" :key="tag + index" class="text-white bg-primary rounded-lg px-2">{{ tag }}</span>
        <h1 class="text-5xl text-white mt-1">{{ activity.name }}</h1>
      </div>
      <img :src="activity.imageUrl" alt="" class="w-1/2 h-[400px] object-cover object-top translate-y-1/4 rounded-lg" />
    </div>
  </div>
  <div class="container border border-gray-light py-10 mb-10">
    <section class="flex flex-col items-center">
      <h2 class="text-center text-4xl mb-5">{{ activity.type }}描述</h2>
      <p class="w-1/2 text-lg">{{ activity.description }}</p>
    </section>
  </div>
  <div class="py-10 bg-white"></div>
</template>
