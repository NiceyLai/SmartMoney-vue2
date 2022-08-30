<!-- eslint-disable vue/multi-word-component-names -->
<template>
        <svg class="icon">
            <use :xlink:href="'#'+name"></use>
        </svg>
</template>

<script lang="ts">

// 如何 import 一个目录
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try{importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

export default {
    props: ['name'],
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Icon'
    }
</script>

<style lang="scss" scoped>
   .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>