<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div>当前页面不存在，请检查网址是否正确</div>
        <div>
            <!-- 第一种写法 -->
            <router-link to="/">返回首页</router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
          // eslint-disable-next-line vue/multi-word-component-names
        name:'NotFound',
    };
</script>

<style lang="scss" scoped>

</style>