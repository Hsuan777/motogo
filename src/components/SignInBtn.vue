<script setup>
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import { NButton, NModal, NCard } from "naive-ui";
import { Field, Form, ErrorMessage } from "vee-validate";

const isLoading = ref(false);
const showModal = ref(false);
</script>

<template>
  <Loading :active="isLoading" />
  <n-button type="primary" class="text-green-500" @click="showModal = true"
    >登入</n-button
  >
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 400px"
      title="登入"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <Form>
        <div class="mb-3">
          <label for="account">帳號</label>
          <Field
            id="account"
            name="帳號"
            rules="email|required"
            class="w-full border p-1 rounded"
          />
          <ErrorMessage name="帳號" class="text-red-500" />
        </div>
        <div class="mb-3">
          <label for="">密碼</label>
          <Field
            id="password"
            name="密碼"
            rules="required"
            class="w-full border p-1 rounded"
          />
          <ErrorMessage name="密碼" class="text-red-500" />
        </div>
        <div class="flex justify-around">
          <n-button type="error" class="border border-red-500 text-red-500">
            GOOGLE 登入
          </n-button>
          <n-button type="primary" class="text-green-500 w-1/3">送出</n-button>
        </div>
      </Form>
    </n-card>
  </n-modal>
</template>
