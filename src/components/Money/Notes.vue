<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <label class="notes">
      {{ value }}
      <span class="name">备注</span>
      <input
        type="text"
        :value="value"
        @input="onInput"
        placeholder="在这里输入备注"
      />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onInput(e) {
      this.value = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>