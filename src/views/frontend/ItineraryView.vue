<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import axios from "axios";
import { apiGetItinerary } from "@/apis/itineraries.js";
import * as echarts from "echarts";

const apiKey = import.meta.env.VITE_Google_API_Key;
const place = ref({});
const getGooglePlace = async () => {
  const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${itinerary.value.name}&key=${apiKey}`);
  place.value = data.results[0];
  getGooglePlaceDetails(data.results[0].place_id);
  // getGoolePlaceNear(place.value.geometry.location);
};
const placeDetails = ref({});
const getGooglePlaceDetails = async (placeId) => {
  const apiKey = import.meta.env.VITE_Google_API_Key;
  const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${apiKey}`);
  placeDetails.value = data.result;
  placeDetails.value.photos.length = 5;
  getGooglePlacePhoto();
};
const getGooglePlacePhoto = (photo_reference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&key=${apiKey}`;
};
// const getGoolePlaceNear = async (location) => {
//   const radius = 1000;
//   const keyword = "景點";
//   const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat + "," + location.lng}&radius=${radius}&keyword=${keyword}&key=${apiKey}`);
//   console.log(data);
// };
const itinerary = ref({});
const getItinerary = async () => {
  const { data } = await apiGetItinerary(router.currentRoute.value.params.id);
  itinerary.value = data.data;
  if (itinerary.value.type === "景點") getGooglePlace();
};
getItinerary();

const gaugeDom = ref(null);
const gaugeChart = ref(null);
let option = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  textStyle: {
    fontFamily: "Digital",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      progress: {
        show: true,
      },
      detail: {
        valueAnimation: true,
        formatter: "{value}",
      },
      data: [
        {
          value: 0,
          name: "Speed",
        },
      ],
    },
  ],
};
const clickGO = () => {
  const addSpeed = setInterval(() => {
    if (option.series[0].data[0].value === 100) {
      clearInterval(addSpeed);
      if (itinerary.value?.shareLink) {
        setTimeout(() => {
          window.open(itinerary.value?.shareLink, "_blank");
        }, 1000);
      } else {
        setTimeout(() => {
          window.open(`https://www.google.com/maps/dir//${itinerary.value.name}`, "_blank");
        }, 1000);
      }
    } else {
      option.series[0].data[0].value += 10;
    }
    gaugeChart.value.setOption(option);
  }, 100);
};
onMounted(() => {
  gaugeChart.value = echarts.init(gaugeDom.value);
  gaugeChart.value.setOption(option);
});
</script>
<template>
  <div v-if="itinerary._id" class="bg-[url(https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2766&q=80)] bg-bottom">
    <div class="container flex justify-around items-center mb-40">
      <div>
        <span class="text-white bg-gray rounded-lg px-2 mr-3">{{ itinerary.type }}</span>
        <span v-for="(tag, index) in itinerary.tags" :key="tag + index" class="text-white bg-primary rounded-lg px-2">{{ tag }}</span>
        <h1 class="text-5xl text-white mt-1">{{ itinerary.name }}</h1>
      </div>
      <img :src="itinerary.imageUrl" alt="" class="w-1/2 h-[400px] object-cover object-top translate-y-1/4 rounded-lg border border-white border-4" />
    </div>
  </div>
  <!-- description -->
  <section class="container flex justify-center items-center border border-gray-light py-10 mb-10">
    <p class="w-1/2 text-lg">{{ itinerary.description }}</p>
  </section>
  <!-- place photos -->
  <section v-if="itinerary.type === '景點'" class="bg-black p-5 mb-10">
    <ul class="flex justify-between mb-3">
      <li v-for="num in 12" :key="num" class="bg-white w-5 h-6 rounded"></li>
    </ul>
    <ul class="grid grid-cols-5 gap-5">
      <li v-for="placeDetail in placeDetails.photos" :key="placeDetail.photo_reference">
        <img :src="getGooglePlacePhoto(placeDetail.photo_reference)" alt="" class="w-full object-cover h-80 rounded-lg" />
      </li>
    </ul>
    <ul class="flex justify-between mt-3">
      <li v-for="num in 12" :key="num" class="bg-white w-5 h-6 rounded"></li>
    </ul>
  </section>
  <!-- map iframe -->
  <div class="container mb-10">
    <iframe v-if="itinerary.type === '景點'" :src="`https://www.google.com/maps/embed/v1/place?q=${itinerary.name}&key=${apiKey}`" height="450" style="border: 0" allowfullscreen="" loading="lazy" class="w-full" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <iframe v-if="itinerary.type === '公路'" :src="itinerary.iframe" height="450" style="border: 0" allowfullscreen="" loading="lazy" class="w-full" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <!-- gauge and go -->
  <section class="flex justify-center items-center">
    <p class="text-lg">
      「 按下
      <button type="button" class="text-2xl font-digital animate-scale ml-1" @click="clickGO">GO</button>
      ，就出發！」
    </p>
    <div ref="gaugeDom" class="w-80 h-80"></div>
  </section>
</template>
