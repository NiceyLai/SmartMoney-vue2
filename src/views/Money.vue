<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <Number @update:value="onUpdateAmount" @submit="saveRecord"></Number>
    <Types :value.sync="record.type"></Types>
    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      ></FormItem>
    </div>
    <tags :data-source.sync="tags" @update:value="onUpdateTags"></tags>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Number from "../components/Money/Number.vue";
import Types from "../components/Money/Types.vue";
import Tags from "../components/Money/Tags.vue";
import FormItem from "../components/Money/FormItem.vue";
import { Component } from "vue-property-decorator";
import store from "@/store/index2";

@Component({ components: { Tags, FormItem, Types, Number } })
export default class Money extends Vue {
  tags = store.tagList;
  recordList = store.recordList;
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
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>