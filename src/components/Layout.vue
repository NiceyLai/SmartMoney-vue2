<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  props: ["classPrefix"],
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
  
}
</style>