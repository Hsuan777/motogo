<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { NButton, NInputGroup, NInput, NIcon } from "naive-ui";
import { Search } from "@vicons/ionicons5";
import axios from "axios";
import * as d3 from "d3";
import * as topojson from "topojson-client";

// 台灣地圖
const county_geomap_api =
  "https://hexschool.github.io/tw_revenue/taiwan-geomap.json";

const getTaiwanMap = () => {
  axios.get(county_geomap_api).then((res) => {
    drawMap(res.data);
  });
};
const drawMap = (mapData) => {
  // 設定要繪製的地圖大小，以 svg 繪製
  let width = 800;
  let height = 600;
  d3.select("#map")
    // .attr("class", "svgback")
    .attr("width", width)
    .attr("height", height);
  // 設定預設位置與縮放級距
  const projection = d3.geoMercator().center([120, 24]).scale(6000);
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
      console.log(e.target.attributes);
      let pathCountyName = e.target.attributes[2] || "";
      console.log(pathCountyName);
      // let countyRevenue =
      //   county_revenueData.filter(
      //     (item) => item.city === pathCountyName.value
      //   )[0] || "";
      // cityName.innerHTML = pathCountyName.value || "";
      // cityRevenue.innerHTML = countyRevenue.revenue || "";
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
    <section>
      <h2 class="text-3xl mb-6">熱門路線</h2>
      <div class="flex items-center my-3 bg-black">
        <svg id="map" class="map">
          <g class="fill-gray-300 hover:fill-primary"></g>
          <path
            class="county-borders fill-none stroke-gray-400 stroke-1"
          ></path>
        </svg>
        <div class="text-center">
          <h2 class=""></h2>
        </div>
      </div>
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
        <n-button type="primary" size="" class="w-1/6 bg-primary rounded">
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
