<script setup>
import { ref } from "vue";
import router from "@/router";
import { NIcon } from "naive-ui";
import { Star, Flag } from "@vicons/ionicons5";
import { apiGetItineraries } from "@/apis/itineraries.js";

const itinerariesType = ref([]);
const itinerariesTags = ref([]);
const query = ref("");
query.value = router.currentRoute.value.query.query;
// 行程資料
const itineraries = ref([]);
const originItineraries = ref(null);
const getItineraries = async () => {
  const { data } = await apiGetItineraries();
  originItineraries.value = data.data;
  itineraries.value = originItineraries.value;
  itineraries.value.forEach((itinerary) => {
    if (!itinerariesType.value.includes(itinerary.type)) {
      itinerariesType.value.push(itinerary.type);
    }
    itinerary.tags.forEach((tag) => {
      if (!itinerariesTags.value.includes(tag)) {
        itinerariesTags.value.push(tag);
      }
    });
  });
  changeQuery();
};
getItineraries();
const selectType = ref("所有");
const selectTag = ref("所有");
const changeTypeOrTag = () => {
  let filterData;
  if (selectType.value !== "所有" && selectTag.value === "所有") {
    filterData = originItineraries.value.filter((item) => item.type === selectType.value);
    itineraries.value = filterData;
  } else if (selectType.value !== "所有" && selectTag.value !== "所有") {
    filterData = originItineraries.value.filter((item) => item.type === selectType.value && item.tags.includes(selectTag.value));
    itineraries.value = filterData;
  } else if (selectType.value === "所有") {
    if (selectTag.value !== "所有") {
      filterData = originItineraries.value.filter((item) => item.tags.includes(selectTag.value));
      itineraries.value = filterData;
      return;
    } else {
      itineraries.value = originItineraries.value;
    }
  }
};
const changeQuery = () => {
  if (query.value === "" || query.value === undefined) {
    changeTypeOrTag();
  } else {
    const filterData = itineraries.value.filter((item) => item.name.includes(query.value));
    itineraries.value = filterData;
  }
};
</script>
<template>
  <!-- 公路與景點 -->
  <section class="container py-10">
    <div class="flex items-center mb-6">
      <h2 class="text-3xl mr-3">公路與景點</h2>
      <div class="text-xl">
        <span class="mr-1">類型：</span>
        <select name="" id="" v-model="selectType" @change="changeTypeOrTag" class="mr-1">
          <option value="所有" selected>所有</option>
          <option v-for="type in itinerariesType" :key="type" :value="type">{{ type }}</option>
        </select>
        <span class="mr-1">標籤：</span>
        <select name="" id="" v-model="selectTag" @change="changeTypeOrTag" class="mr-3">
          <option value="所有" selected>所有</option>
          <option v-for="tag in itinerariesTags" :key="tag" :value="tag">{{ tag }}</option>
        </select>
        <input id="autocomplete-input" v-model="query" type="text" placeholder="想去哪裡呢？" class="p-2 border focus:outline-primary rounded-lg" @change="changeQuery" />
      </div>
    </div>
    <ul class="grid grid-cols-4 gap-6">
      <li v-for="itinerary in itineraries" :key="itinerary._id" class="relative pb-5">
        <div class="flex justify-between items-center">
          <h3 class="text-xl mb-1">{{ itinerary.name }}</h3>
          <span v-for="(tag, index) in itinerary.tags" :key="tag + index" class="ml-auto mr-3 text-white bg-primary rounded-lg px-2">{{ tag }}</span>
          <span class="text-white bg-gray rounded-lg px-2">{{ itinerary.type }}</span>
        </div>
        <RouterLink :to="'/itineraries/' + itinerary._id">
          <img :src="itinerary.imageUrl" alt="" class="w-full h-[200px] object-cover object-top rounded-lg mb-2" />
        </RouterLink>
        <p class="line-clamp-3 text-sm mb-2">{{ itinerary.description }}</p>
        <div class="absolute bottom-0 left-0 flex items-center">
          <div class="flex items-center mr-5">
            <n-icon size="16" :component="Star" class="mr-1 text-primary" />
            <span>{{ itinerary.stars }}</span>
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
