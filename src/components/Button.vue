<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.button {
  background: $color-highlight;
  color: #fff;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
}
</style>