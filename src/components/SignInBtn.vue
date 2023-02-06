<script setup>
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import { NButton, NModal, NCard } from "naive-ui";
const isLoading = ref(false);
const showModal = ref(false);
</script>

<template>
  <Loading :active="isLoading" />
  <n-button type="primary" @click="showModal = true">登入</n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="登入"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <form action="">
        <div class="mb-3">
          <label for="userName" class="block">帳號</label>
          <input type="text" name="userName" id="userName" />
        </div>
        <div>
          <label for="password" class="block">密碼</label>
          <input type="text" name="userPassword" id="userPassword" />
        </div>
        <div>
          <label for="">第三方登入</label>
          <input type="button" value="GOOGLE" />
        </div>
      </form>
    </n-card>
  </n-modal>
</template>
