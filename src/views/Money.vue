<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <Number @update:value="onUpdateAmount" @submit="saveRecord"></Number>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"></Tabs>
    <div class="notes-date">
   <div class="createdAt">
      <FormItem
        field-name="日期"
        type='date'
        placeholder="在这里输入日期"
        :value.sync="record.createdAt"
      ></FormItem>
    </div>
    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="在这里输入备注"
        :value.sync="record.notes"
      ></FormItem>
    </div>
    </div>
    <Tags @update:value="record.tags = $event" class='tags'/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Number from "../components/Money/Number.vue";
import Tags from "../components/Money/Tags.vue";
import FormItem from "../components/Money/FormItem.vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: { Tabs, Tags, FormItem, Number },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdAt: new Date().toISOString(),
  };

  created() {
    this.$store.commit("fetchRecords");
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert("请至少选择一个标签");
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.record.notes = "";
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.tags{
  max-height:34vh;
  overflow: auto;
}
.notes-date{
  position:absolute;
  width:100%;
  bottom:340px;
}
</style>
