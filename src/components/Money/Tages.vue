<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tage in dataSource"
        :key="tage"
        :class="{ selected: selectedTages.indexOf(tage) >= 0 }"
        @click="toggle(tage)"
      >
        {{ tage }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tages extends Vue {
  @Prop(Array) dataSource: string[] | undefined;
  selectedTages: string[] = [];
  toggle(tage: string) {
    const index = this.selectedTages.indexOf(tage);
    if (index >= 0) {
      this.selectedTages.splice(index, 1);
    } else {
      this.selectedTages.push(tage);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>