<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <Number></Number>
    <Types></Types>
    <Notes></Notes>
    <Tages :data-source.sync="tages"></Tages>
  </Layout>
</template>

<script>
import Number from "../components/Money/Number.vue";
import Types from "../components/Money/Types.vue";
import Tages from "../components/Money/Tages.vue";
import Notes from "../components/Money/Notes.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Money",
  components: { Tages, Notes, Types, Number },
  data() {
    return {
      tages: ["衣", "食", "住", "行", "买"],
    };
  },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped></style>