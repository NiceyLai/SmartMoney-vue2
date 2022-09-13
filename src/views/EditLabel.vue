<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout>
    <div>
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <FormItem field-name="标签名" placeholder="请输入标签名" />
    <Button>删除标签</Button>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Icon from "@/components/Icon.vue";
import FormItem from "../components/Money/FormItem.vue";
import Button from "../components/Button.vue";

@Component({
  components: { Icon, FormItem },
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped></style>