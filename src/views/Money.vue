<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <Number @update:value="onUpdateAmount" @submit="saveRecord"></Number>
    <Types :value.sync="record.type"></Types>
    <FormItem
      field-name="备注"
      placeholder="在这里输入备注"
      @update:value="onUpdateNotes"
    ></FormItem>
    <tags :data-source.sync="tags" @update:value="onUpdateTags"></tags>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Number from "../components/Money/Number.vue";
import Types from "../components/Money/Types.vue";
import Tags from "../components/Money/Tags.vue";
import FormItem from "../components/Money/FormItem.vue";
import { Component, Watch } from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({ components: { Tags, FormItem, Types, Number } })
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch("recordList")
  onRecordListChanged() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>