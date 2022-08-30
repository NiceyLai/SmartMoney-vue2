<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="nav-wrapper">
        <div class="content">Money.vue</div>
        <Nav/>
    </div>
</template>

<script lang="ts">
export default {
          // eslint-disable-next-line vue/multi-word-component-names
        name:'Money',
    };
</script>

<style lang="scss" scoped>
.nav-wrapper {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content{
    border: 1px solid blue;
    overflow: auto;
    flex-grow: 1;
}
</style>