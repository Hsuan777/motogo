<script setup>
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import { NButton, NModal, NCard } from "naive-ui";
import { Field, Form, ErrorMessage } from "vee-validate";

const isLoading = ref(false);
const signinModal = ref(false);
const signupModal = ref(false);
const changeModal = () => {
  signinModal.value = !signinModal.value;
  signupModal.value = !signupModal.value;
}
</script>

<template>
  <Loading :active="isLoading" />
  <n-button type="primary" class="bg-primary" @click="signinModal = true"
    >登入</n-button
  >
  <n-modal
    preset="dialog"
    title="登入"
    :auto-focus="false"
    v-model:show="signinModal"
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
      <div class="flex justify-around mb-3">
        <n-button type="error" class="border border-red-500 text-red-500">
          GOOGLE 登入
        </n-button>
        <n-button type="primary" class="text-primary w-1/3">登入</n-button>
      </div>
    </Form>
    <a @click.prevent="changeModal" class="block text-center underline cursor-pointer">還沒有帳號嗎? 點我註冊</a>
  </n-modal>
  <n-modal
    preset="dialog"
    title="註冊"
    :auto-focus="false"
    v-model:show="signupModal"
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
          rules="required|min:8"
          class="w-full border p-1 rounded"
        />
        <ErrorMessage name="密碼" class="text-red-500" />
      </div>
      <div class="flex justify-around mb-3">
        <n-button type="error" class="border border-red-500 text-red-500">
          GOOGLE 註冊
        </n-button>
        <n-button type="primary" class="text-primary w-1/3">註冊</n-button>
      </div>
    </Form>
    <a @click.prevent="changeModal" class="block text-center underline cursor-pointer">已經有帳號了? 點我登入</a>
  </n-modal>
</template>
