<script setup>
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import { NButton, NModal, NCard } from "naive-ui";
import { Field, Form, ErrorMessage } from "vee-validate";

const isLoading = ref(false);
const showModal = ref(false);
function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "This is required";
}
</script>

<template>
  <Loading :active="isLoading" />
  <n-button type="primary" class="text-green-500" @click="showModal = true"
    >登入</n-button
  >
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="登入"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <!-- <form action="">
        <div class="mb-3">
          <label for="userName" class="block mb-1">帳號</label>
          <input
            type="text"
            name="userName"
            id="userName"
            class="w-full border py-2"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="block mb-1">密碼</label>
          <input
            type="text"
            name="userPassword"
            id="userPassword"
            class="w-full border py-2"
          />
        </div>
        <div class="mb-3 flex justify-center">
          <n-button
            type="primary"
            class="border border-green-500 bg-green-500 px-9"
            @click="showModal = true"
            >登入</n-button
          >
        </div>
        <div class="mb-3 flex justify-center">
          <n-button
            type="error"
            class="border border-red-500 text-white bg-red-500 px-5"
          >
            GOOGLE
          </n-button>
        </div>
      </form> -->
      <Form>
        <div class="mb-3">
          <Field name="field" :rules="isRequired" class="border" />
          <ErrorMessage name="field" class="text-red-500" />
        </div>
        <button>Submit</button>
      </Form>
    </n-card>
  </n-modal>
</template>
