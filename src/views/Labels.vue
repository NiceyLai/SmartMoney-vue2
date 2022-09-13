<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="creatTag-wrapper">
      <button class="creatTag" @click="creatTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";

tagListModel.fetch();

@Component
export default class Labels extends Vue {
  tags = tagListModel.data;

  creatTag() {
    const name = window.prompt("请输入标签名：");
    if (name) {
      const message = tagListModel.create(name);

      if (message === "duplicated") {
        window.alert("标签名重复了，请重新操作");
      } else if (message === "success") {
        window.alert("添加标签名成功！");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > li {
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      color: #666;
      margin-right: 16px;
    }
  }
}

.creatTag {
  background: #767676;
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>