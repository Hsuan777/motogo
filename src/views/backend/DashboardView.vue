<script setup>
import { h, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { NIcon, NSpace, NLayout, NLayoutSider, NMenu, NButton } from "naive-ui";
import { CaretDownOutline } from "@vicons/ionicons5";
import { Dashboard } from "@vicons/carbon";
import { Route } from "@vicons/fa";
import { SportsMotorsportsFilled, ArticleOutlined } from "@vicons/material";

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/manage",
          },
        },
        { default: () => "總覽" }
      ),
    key: "manage",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/manage/routes",
          },
        },
        { default: () => "路線管理" }
      ),
    key: "routes",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/manage/activities",
          },
        },
        { default: () => "活動管理" }
      ),
    key: "activities",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/manage/articles",
          },
        },
        { default: () => "文章管理" }
      ),
    key: "articles",
  },
];
const collapsed = ref(true);
const renderMenuIcon = (option) => {
  if (option.key === "manage")
    return h(NIcon, null, { default: () => h(Dashboard) });
  if (option.key === "routes")
    return h(NIcon, null, { default: () => h(Route) });
  if (option.key === "activities")
    return h(NIcon, null, { default: () => h(SportsMotorsportsFilled) });
  if (option.key === "articles")
    return h(NIcon, null, { default: () => h(ArticleOutlined) });
};
const expandIcon = () => {
  return h(NIcon, null, { default: () => h(CaretDownOutline) });
};
</script>

<template>
  <header class="px-6 border-b">
    <nav class="flex items-center my-4">
      <h1 class="text-black mr-auto text-2xl leading-normal">
        <RouterLink to="/manage">MOTO GO</RouterLink>
        <span class="text-sm ml-2">控制台</span>
      </h1>
      <ul class="flex items-center">
        <li
          class="mx-3 border-b border-white hover:border-b hover:border-green-500"
        >
          <RouterLink to="/" target="_blank">回到前台</RouterLink>
        </li>
        <li class="ml-3">
          <n-button type="primary" class="bg-primary">登出</n-button>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <n-space vertical>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
        >
          <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="24"
            :options="menuOptions"
            :render-icon="renderMenuIcon"
            :expand-icon="expandIcon"
          />
        </n-layout-sider>
        <n-layout>
          <RouterView />
        </n-layout>
      </n-layout>
    </n-space>
  </main>
</template>
