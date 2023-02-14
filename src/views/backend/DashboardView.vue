<script setup>
import { h, ref } from "vue";
import { NIcon, NSpace, NLayout, NLayoutSider, NMenu } from "naive-ui";
import { BookmarkOutline, CaretDownOutline } from "@vicons/ionicons5";
import SignInBtn from "@/components/SignInBtn.vue";

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
  if (option.key === "sheep-man") return true;
  if (option.key === "food") return null;
  return h(NIcon, null, { default: () => h(BookmarkOutline) });
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
          <RouterLink to="/todo" target="_blank">行前清點</RouterLink>
        </li>
        <li
          class="mx-3 border-b border-white hover:border-b hover:border-green-500"
        >
          <RouterLink to="/routes">所有路線</RouterLink>
        </li>
        <li
          class="mx-3 border-b border-white hover:border-b hover:border-green-500"
        >
          <RouterLink to="/activities">路騎活動</RouterLink>
        </li>
        <li
          class="mx-3 border-b border-white hover:border-b hover:border-green-500"
        >
          <RouterLink to="/share">我要分享</RouterLink>
        </li>
        <li class="ml-3">
          <SignInBtn />
        </li>
      </ul>
    </nav>
  </header>
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
          :collapsed-icon-size="22"
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
</template>
