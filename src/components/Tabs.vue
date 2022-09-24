<!-- eslint-disable vue/no-parsing-error -->
<template>
  <nav>
  <ul class="tabs" :class="{ [classPrefix + '-tabs']: classPrefix }">
    <li
      v-for="item in dataSource"
      :key="item.value"
      :class="liClass(item)"
      class="tabs-item"
      @click="select(item)"
    >
      {{ item.text }}
    </li>
  </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = {
  text: string;
  value: string;
};

@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: DataSourceItem;
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + "-tabs-item"]: this.classPrefix,
      selected: item.value === this.value,
    };
  }
  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknow");
    }
    this.$emit("update:value", type);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
nav{
   position: relative;
   .tabs {
  background: $color-bg1;
  display: flex;
   position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
  text-align: center;
  font-size: 24px;
  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected {
      color: $color-highlight;
    }
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: $color-highlight;
    }
  }
}
}

</style>