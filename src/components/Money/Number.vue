<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = "0";
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0) {
      //保证里面只有一个小数点
      if (input === ".") return;
      // 保证只输出小数点后两位
      if (this.output.length === this.output.indexOf(".") + 3) return;
    }
    this.output += input;
  }

  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  clear() {
    this.output = "0";
  }

  ok() {
    const number = parseFloat(this.output);
    this.$emit("update:value", number);
    this.$emit("submit", number);
    this.output = "0";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  position: absolute;
  left: 0;
  bottom: 54px;
  width: 100%;
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 30px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    height: 62px;
  }
  .buttons {
    background-color: $color-bg1;
    @extend %clearFix;

    > button {
      width: 25%;
      height: 56px;
      float: left;
      background-color: #f5f5f5;
      border-radius: 15px;
      border: 4px solid $color-bg1;
      &.ok {
        height: 56 * 2px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
    }
  }
}
</style>