<template>
    <el-container>
    <el-header height="" padding="">
        <default-header />
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
</el-container>
</template>
<script>
import DefaultHeader from '../components/header/index.vue';
export default {
    components:{
        DefaultHeader
    }
}
</script>
<style scoped>
   .el-header{
       padding:0;
   }
</style>