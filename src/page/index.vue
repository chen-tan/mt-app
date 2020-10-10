<template>
    <div class="default-main">
            <index-nav />
            <index-life />
    </div>
</template>
<script>
import IndexNav from '@/components/index/nav.vue';
import IndexLife from '@/components/index/life.vue';
export default {
    components:{
        IndexNav,
        IndexLife
        },
}
</script>
<style lang="scss">
    @import "~@/assets/css/index/index.scss";
</style>