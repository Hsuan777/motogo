<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import { apiGetItinerary, apiGetItineraryPhotos } from "@/apis/itineraries.js";
import * as echarts from "echarts";

const apiKey = import.meta.env.VITE_Google_API_Key;
const photos = ref([]);
const getGooglePlacePhoto = async () => {
  const { data } = await apiGetItineraryPhotos(itinerary.value.name);
  photos.value = data.data;
  photos.value.push(...data.data);
};

const itinerary = ref({});
const getItinerary = async () => {
  const { data } = await apiGetItinerary(router.currentRoute.value.params.id);
  itinerary.value = data.data;
  if (itinerary.value.type === "景點") getGooglePlacePhoto();
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
  setTimeout(() => {
    window.gsap.to(".loop", {
      xPercent: "-20",
      ease: "none",
      duration: 20,
      repeat: -1,
    });
    const srollTL = window.gsap.timeline({
      scrollTrigger: {
        trigger: ".photos",
        scrub: true,
        start: "top 50%",
        end: "top 15%",
      },
    });
    srollTL.to(".photos", { xPercent: -100 });
  }, 1000);
});
</script>
<template>
  <div v-if="itinerary._id" class="bg-[url(https://lh3.googleusercontent.com/pw/ADCreHcLoNSYxltduDKcT8E47rjgWeVaz2s6LujuulRPJ_IhO1EW5xIetMYeYeE-FUFJQt1Fs8VR2K9IcpDgSvHbcmnpuDWRYgZKao6qt-L_ge1FKFCF-sYNpnttLdsc7hhCmJ98S1PVMGphJC2mKHbTP7Hv=w2518-h1416-s-no-gm?authuser=0)] bg-cover bg-center bg-no-repeat">
    <div class="container flex md:justify-around items-center md:mb-40">
      <div class="py-10">
        <span class="text-white bg-gray rounded-lg px-2 mr-3">{{ itinerary.type }}</span>
        <span v-for="(tag, index) in itinerary.tags" :key="tag + index" class="text-white bg-primary rounded-lg px-2">{{ tag }}</span>
        <h1 class="text-5xl text-white mt-1">{{ itinerary.name }}</h1>
      </div>
      <div class="overflow-hidden hidden md:block w-1/2 h-[400px] translate-y-1/4 rounded-lg border-4 border-white">
        <img :src="itinerary.imageUrl" alt="" class="object-cover object-top scale-110 transition-transform transform-growth" />
      </div>
    </div>
  </div>
  <img :src="itinerary.imageUrl" alt="" class="w-full md:hidden h-[300px] object-cover object-top mt-1 mb-10" />
  <!-- description -->
  <section class="container flex justify-center items-center md:border md:border-gray-light md:py-10 mb-10">
    <p class="xl:w-1/2 text-lg">{{ itinerary.description }}</p>
  </section>
  <!-- place photos -->
  <section v-if="itinerary.type === '景點'" class="overflow-hidden bg-black p-5 mb-10">
    <ul class="loop flex mb-3">
      <li v-for="num in 54" :key="num" class="bg-white h-6 mr-5 pr-5 rounded"></li>
    </ul>
    <!-- <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">
      <li v-for="(photo, index) in photos" :key="photo + index">
        <img :src="photo" alt="" class="w-full object-cover h-60 rounded" />
      </li>
    </ul> -->
    <ul class="photos flex gap-5">
      <li v-for="(photo, index) in photos" :key="photo + index">
        <img :src="photo" alt="" class="min-w-[200px] object-cover h-60 rounded" />
      </li>
    </ul>
    <ul class="loop flex mt-3">
      <li v-for="num in 54" :key="num" class="bg-white h-6 mr-5 pr-5 rounded"></li>
    </ul>
  </section>
  <!-- map iframe -->
  <div class="container mb-20 md:mb-10">
    <iframe v-if="itinerary.type === '景點'" :src="`https://www.google.com/maps/embed/v1/place?q=${itinerary.name}&key=${apiKey}`" height="450" style="border: 0" allowfullscreen="" loading="lazy" class="w-full" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <iframe v-if="itinerary.type === '公路'" :src="itinerary.iframe" height="450" style="border: 0" allowfullscreen="" loading="lazy" class="w-full" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <!-- gauge and go -->
  <section class="flex flex-col md:flex-row justify-center items-center">
    <p class="text-lg">
      「 按下
      <button type="button" class="text-2xl font-digital animate-scale ml-1" @click="clickGO">GO</button>
      ，就出發！」
    </p>
    <div ref="gaugeDom" class="w-80 h-80"></div>
  </section>
</template>
<style>
.transform-growth {
  animation: growth 10s ease-in-out forwards;
}

@keyframes growth {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>
