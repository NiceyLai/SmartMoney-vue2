<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    {{ record }}
    <Number @update:value="onUpdateAmount" @submit="saveRecord"></Number>
    <Types :value.sync="record.type"></Types>
    <Notes @update:value="onUpdateNotes"></Notes>
    <tages :data-source.sync="tages" @update:value="onUpdateTages"></tages>
  </Layout>
</template>

<script lang="ts">
import Vue, { watch } from "vue";
import Number from "../components/Money/Number.vue";
import Types from "../components/Money/Types.vue";
import Tages from "../components/Money/Tages.vue";
import Notes from "../components/Money/Notes.vue";
import { Component, Watch } from "vue-property-decorator";

type Record = {
  tages: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({ components: { Tages, Notes, Types, Number } })
export default class Money extends Vue {
  tages = ["衣", "食", "住", "行", "买"];
  recordList: Record[] = [];
  record: Record = { tages: [], notes: "", type: "-", amount: 0 };

  onUpdateTages(value: string[]) {
    this.record.tages = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2 = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch("recordList")
  onRecordListChanged() {
    localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>