<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot></slot>
            </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
export default {
          // eslint-disable-next-line vue/multi-word-component-names
        name:'Layout',
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