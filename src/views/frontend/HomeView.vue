<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { NButton, NInputGroup, NInput, NIcon } from "naive-ui";
import { Search, Star, Flag } from "@vicons/ionicons5";
import axios from "axios";
import * as d3 from "d3";
import * as topojson from "topojson-client";

// 台灣地圖
const county_geomap_api =
  "https://hexschool.github.io/tw_revenue/taiwan-geomap.json";

const pathCountyName = ref("");
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
    .data(
      topojson.feature(mapData, mapData.objects["COUNTY_MOI_1090820"]).features
    )
    .enter()
    .append("path")
    .attr("d", path)
    .attr("countyName", (d) => d.properties.COUNTYNAME);
  d3.select(".county-borders").attr(
    "d",
    path(
      topojson.mesh(
        mapData,
        mapData.objects["COUNTY_MOI_1090820"],
        function (a, b) {
          return a !== b;
        }
      )
    )
  );
  d3.select("#map")
    .selectAll("path")
    .on("mouseenter", (e) => {
      pathCountyName.value = e.target.attributes.countyName.value || "";
    });
};
getTaiwanMap();
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
      <n-button type="primary" size="large" class="bg-primary rounded-lg">
        <n-icon size="24" :component="Search" />
      </n-button>
    </n-input-group>
    <RouterLink to="/routes" class="text-white underline underline-offset-4"
      >隨機一個 GO!</RouterLink
    >
    <img
      class="absolute inset-0 w-full object-center object-cover h-full -z-10"
      type="image"
      src="@/assets/images/banner.avif"
      alt="banner"
    />
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
        <div class="w-full p-10 bg-gray-dark">
          <ul class="text-white">
            <li class="flex justify-between border-b border-gray pb-4">
              <div>
                <h3 class="text-xl mb-2">{{ pathCountyName }}</h3>
                <p class="mb-2">
                  武嶺，公路可達的最高點，無論是北中南車友都推薦一遊。
                </p>
                <div class="flex items-center">
                  <div class="flex items-center mr-5">
                    <n-icon
                      size="16"
                      :component="Star"
                      class="mr-1 text-primary"
                    />
                    <span>4.9</span>
                  </div>
                  <div class="flex items-center">
                    <n-icon
                      size="16"
                      :component="Flag"
                      class="mr-1 text-primary"
                    />
                    <span>3,234</span>
                  </div>
                </div>
              </div>
              <img src="https://fakeimg.pl/200x120/" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 推薦路線 -->
    <section class="border-b border-gray-light pb-24 mb-10">
      <h2 class="text-3xl mb-6">推薦路線</h2>
      <ul class="grid grid-cols-4 gap-6">
        <li>
          <img
            src="https://fakeimg.pl/800x600/"
            alt=""
            class="w-full object-contain mb-2"
          />
          <h3 class="text-xl mb-1">北橫 - 武嶺</h3>
          <p class="text-sm mb-2">
            武嶺，公路可達的最高點，無論是北中南車友都推薦一遊。
          </p>
          <div class="flex items-center">
            <div class="flex items-center mr-5">
              <n-icon size="16" :component="Star" class="mr-1 text-primary" />
              <span>4.9</span>
            </div>
            <div class="flex items-center">
              <n-icon size="16" :component="Flag" class="mr-1 text-primary" />
              <span>3,234</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- 路騎活動 -->
    <section class="pb-24">
      <h2 class="text-3xl mb-6">路騎活動</h2>
      <ul class="grid grid-cols-4 gap-6">
        <li>
          <img
            src="https://fakeimg.pl/800x1200/"
            alt=""
            class="w-full object-contain mb-2"
          />
          <h3 class="text-xl mb-1">BOL 7</h3>
          <p class="text-sm mb-2">
            贊助店家往返，完成者會提供紀念品。
          </p>
          <div class="flex items-center">
            <div class="flex items-center mr-5">
              <n-icon size="16" :component="Star" class="mr-1 text-primary" />
              <span>4.9</span>
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
        <h2 class="text-3xl mb-6">
          透過 MOTO GO，你可以探索各種路線與路騎活動。
        </h2>
        <p class="mb-6">
          摩托車，台灣最多人擁有的車種，但它不只是短途通勤的工具，也是出門的最佳夥伴。有了目的，再跨上摩托車，你會發現不一樣的自己，不論排氣量，只要享受與車子前進的時光就行。
        </p>
        <n-button type="primary" size="" class="w-1/6 bg-primary rounded">
          GO~
        </n-button>
      </div>
      <img
        class="object-cover"
        type="image"
        src="@/assets/images/about-picture.avif"
        alt="about"
      />
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
