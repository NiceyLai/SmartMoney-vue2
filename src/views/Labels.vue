<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="creatTag-wrapper">
      <Button class="creatTag" @click="creatTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "../components/Button.vue";

@Component({ components: { Button } })
export default class Labels extends Vue {
  tags = window.tagList;
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
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.creatTag {
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>