<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <Number @update:value="onUpdateAmount"></Number>
    <Types @update:value="onUpdateType"></Types>
    <Notes @update:value="onUpdateNotes"></Notes>
    <Tages :data-source.sync="tages" @update:value="onUpdateTages"></Tages>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Number from "../components/Money/Number.vue";
import Types from "../components/Money/Types.vue";
import Tages from "../components/Money/Tages.vue";
import Notes from "../components/Money/Notes.vue";
import { Component } from "vue-property-decorator";

type Record = {
  tages: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({ components: { Tages, Notes, Types, Number } })
export default class Money extends Vue {
  tages = ["衣", "食", "住", "行", "买"];

  onUpdateTages(value: string[]) {
    console.log(value);
  }

  onUpdateNotes(value: string[]) {
    console.log(value);
  }

  onUpdateType(value: string) {
    console.log(value);
  }

  onUpdateAmount(value: string) {
    console.log(value);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>