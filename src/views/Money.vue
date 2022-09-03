<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <Number></Number>
    <Types xxx="hi"></Types>
    <Notes></Notes>
    <Tages></Tages>
  </Layout>
</template>

<script lang="ts">
import Number from "../components/Money/Number.vue";
import Types from "../components/Money/Types.vue";
import Tages from "../components/Money/Tages.vue";
import Notes from "../components/Money/Notes.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Money",
  components: { Tages, Notes, Types, Number },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped></style>