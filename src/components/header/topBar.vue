<template>
    <el-row class="top-bar">
        <el-col :span="10">
            <top-geo />
        </el-col>
        <el-col :span="14">
            <top-nav />
        </el-col>
    </el-row>
</template>
<script>
import TopNav from '@/components/header/nav.vue';
import TopGeo from '@/components/header/geo.vue';
export default {
    components:{
        TopNav,
        TopGeo
    }
}
</script>
<style lang="scss">
    @import '~@/assets/css/header/topBar.scss';
</style>