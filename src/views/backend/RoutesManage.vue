<script setup>
import { h } from "vue";
import { NSpace, NDataTable, NTag, NButton, useMessage } from "naive-ui";
// const message = useMessage();
const pagination = {
  pageSize: 10,
};
const createColumns = ({ sendMail }) => {
  return [
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Age",
      key: "age",
    },
    {
      title: "Address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: "6px",
              },
              type: "info",
              bordered: false,
            },
            {
              default: () => tagKey,
            }
          );
        });
        return tags;
      },
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            size: "small",
            onClick: () => sendMail(row),
          },
          { default: () => "Send Email" }
        );
      },
    },
  ];
};

const createData = [
  {
    key: 0,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: 1,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["wow"],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const columns = createColumns({
  sendMail(rowData) {
    message.info("send mail to " + rowData.name);
  },
});
const data = createData;
</script>

<template>
  <div class="container py-3">
    <h2 class="text-3xl mb-5">路線管理</h2>
    <n-space vertical :size="12">
      <n-data-table
        :bordered="false"
        :single-line="false"
        :columns="columns"
        :data="data"
        :pagination="pagination"
      />
    </n-space>
  </div>
</template>
