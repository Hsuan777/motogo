<script setup>
import { h, ref } from "vue";
import { NIcon, NSpace, NLayout, NLayoutSider, NMenu, NButton } from "naive-ui";
import { CaretDownOutline } from "@vicons/ionicons5";
import { Dashboard } from "@vicons/carbon";
import { Route } from "@vicons/fa";
import { SportsMotorsportsFilled, ArticleOutlined } from "@vicons/material";

const menuOptions = [
  {
    label: "總覽",
    key: "manage",
    href: "http://localhost:5173/#/manage",
  },
  {
    label: "路線管理",
    key: "routes",
    href: "http://localhost:5173/#/manage/routes",
  },
  {
    label: "活動管理",
    key: "activities",
    href: "http://localhost:5173/#/manage/activities",
  },
  {
    label: "文章管理",
    key: "articles",
    href: "http://localhost:5173/#/manage/articles",
  },
];
const collapsed = ref(true);
const renderMenuLabel = (option) => {
  if ("href" in option) {
    return h("a", { href: option.href }, [option.label]);
  }
  return option.label;
};
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
            :render-label="renderMenuLabel"
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
