<script setup>
import { ref, onMounted, watch } from "vue";
import router from "@/router";
import { RouterLink } from "vue-router";
import { NButton, NInputGroup, NIcon } from "naive-ui";
import { Search, Star, Flag } from "@vicons/ionicons5";
import axios from "axios";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { apiGetItineraries } from "@/apis/itineraries.js";
import { apiGetActivities } from "@/apis/Activities.js";
import "https://maps.googleapis.com/maps/api/js?key=AIzaSyB6HkZsdop6HGQ7PAjX75lWoeEuq5jjJyY&libraries=places";
const inputSearch = ref("");
// 台灣地圖
const county_geomap_api = "https://hexschool.github.io/tw_revenue/taiwan-geomap.json";

const pathCountyName = ref("");
const countyItineraries = ref([]);
const getTaiwanMap = () => {
  axios.get(county_geomap_api).then((res) => {
    drawMap(res.data);
  });
};
const drawMap = (mapData) => {
  // 設定要繪製的地圖大小，以 svg 繪製
  let width = 500;
  let height = 600;
  d3.select("#map")
    // .attr("class", "svgback")
    .attr("width", width)
    .attr("height", height);
  // 設定預設位置與縮放級距
  const projection = d3.geoMercator().center([122.5, 24.5]).scale(6000);
  // 每個縣市的邊框
  const path = d3.geoPath(projection);
  d3.select("#map g")
    .selectAll("path")
    .data(topojson.feature(mapData, mapData.objects["COUNTY_MOI_1090820"]).features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("countyName", (d) => d.properties.COUNTYNAME);
  d3.select(".county-borders").attr(
    "d",
    path(
      topojson.mesh(mapData, mapData.objects["COUNTY_MOI_1090820"], function (a, b) {
        return a !== b;
      })
    )
  );
  d3.select("#map")
    .selectAll("path")
    .on("click", (e) => {
      pathCountyName.value = e.target.attributes.countyName?.value || "";
    });
};
getTaiwanMap();

// 行程資料
const itineraries = ref([]);
const originItineraries = ref([]);
const getItineraries = async () => {
  const { data } = await apiGetItineraries();
  originItineraries.value = data.data;
  for (let x = 0; x < 8; x++) {
    itineraries.value.push(data.data[x]);
  }
};
// 活動資料
const activities = ref([]);
const getActivities = async () => {
  const { data } = await apiGetActivities();
  for (let x = 0; x < 4; x++) {
    activities.value.push(data.data[x]);
  }
};
// 隨機取得一個行程
const goToRandomItinerary = () => {
  const randomIndex = Math.floor(Math.random() * itineraries.value.length);
  const randomItem = itineraries.value[randomIndex];
  router.push(`/itineraries/${randomItem._id}`);
};
watch(
  () => pathCountyName.value,
  () => {
    const str = pathCountyName.value.replace(/縣|市/g, "");
    countyItineraries.value = originItineraries.value.filter((item) => item.location.includes(str));
    if (!pathCountyName.value) {
      countyItineraries.value = originItineraries.value;
    }
  }
);

onMounted(() => {
  getItineraries();
  getActivities();
  const input = document.getElementById("autocomplete-input");
  const autocomplete = new window.google.maps.places.Autocomplete(input);
  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();
    input.value = place.name;
  });
});
</script>

<template>
  <!-- Banner -->
  <figure class="relative flex flex-col justify-center items-center h-[400px] mb-24 pb-1">
    <h2 class="text-5xl text-white mb-8">開始你的騎行之旅</h2>
    <n-input-group class="flex justify-center mb-5">
      <input id="autocomplete-input" v-model="inputSearch" type="text" placeholder="想去哪裡呢？" class="w-1/4 px-2 focus:outline-primary rounded-lg" />
      <n-button type="primary" size="large" class="bg-primary rounded-lg" @click="router.push(`/itineraries?query=${inputSearch}`)">
        <n-icon size="24" :component="Search" />
      </n-button>
    </n-input-group>
    <a @click.prevent="goToRandomItinerary()" class="text-white underline underline-offset-4 cursor-pointer">隨機一個 GO!</a>
    <img class="absolute inset-0 w-full object-center object-cover h-full -z-10" type="image" src="@/assets/images/banner.avif" alt="banner" />
  </figure>
  <div class="container">
    <!--  熱門路線 -->
    <section class="border-b border-gray-light pb-24 mb-10">
      <h2 class="text-3xl mb-6">熱門路線</h2>
      <div class="flex">
        <div class="bg-black">
          <svg id="map" class="map">
            <g class="counties"></g>
            <path class="county-borders fill-none stroke-gray stroke-1"></path>
          </svg>
        </div>
        <div class="w-full text-white bg-gray-dark p-10">
          <h3 class="text-xl mb-2">{{ pathCountyName }}</h3>
          <ul v-if="countyItineraries.length > 0" class="overflow-y-auto max-h-[500px]">
            <li v-for="itinerary in countyItineraries" :key="itinerary._id" class="flex justify-between border-b border-gray py-4">
              <div class="w-4/6">
                <p>{{ itinerary.name }}</p>
                <p class="line-clamp-3 mb-2">{{ itinerary.description }}</p>
                <div class="flex items-center">
                  <div class="flex items-center mr-5">
                    <n-icon size="16" :component="Star" class="mr-1 text-primary" />
                    <span>{{ itinerary.stars }}</span>
                  </div>
                  <div class="flex items-center">
                    <n-icon size="16" :component="Flag" class="mr-1 text-primary" />
                    <span>{{ itinerary.finishedCount }}</span>
                  </div>
                </div>
              </div>
              <img :src="itinerary.imageUrl" :alt="itinerary.name" class="w-[200px] h-[120px] object-cover rounded" />
            </li>
          </ul>
          <p v-else>陸續新增，敬請期待</p>
        </div>
      </div>
    </section>
    <!-- 公路與景點 -->
    <section class="border-b border-gray-light pb-24 mb-10">
      <h2 class="text-3xl mb-6">公路與景點</h2>
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
              <span>{{ itinerary.finishedCount }}</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- 路騎活動 -->
    <section class="pb-24">
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
  </div>
  <!-- About -->
  <section class="flex h-[480px] bg-gray-light">
    <div class="container flex">
      <div class="w-1/2 flex flex-col justify-center pr-36">
        <h2 class="text-3xl mb-6">透過 MOTO GO，你可以探索各種路線與路騎活動。</h2>
        <p class="mb-6">摩托車，台灣最多人擁有的車種，但它不只是短途通勤的工具，也是出門的最佳夥伴。有了目的，再跨上摩托車，你會發現不一樣的自己，不論排氣量，只要享受與車子前進的時光就行。</p>
        <n-button type="primary" size="" class="w-1/6 bg-primary rounded"> GO~ </n-button>
      </div>
      <img class="object-cover" type="image" src="@/assets/images/about-picture.avif" alt="about" />
    </div>
  </section>
</template>
<style>
.counties {
  fill: #d1d5db;
}
.counties :hover {
  fill: #19a96e;
  transition: 0.5s;
}
</style>
