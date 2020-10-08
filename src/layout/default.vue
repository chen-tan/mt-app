<template>
    <el-container>
    <el-header height="" padding="">
        <default-header />
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    <el-footer>
        <default-footer />
    </el-footer>
</el-container>
</template>
<script>
import DefaultHeader from '@/components/header/index.vue';
import DefaultFooter from '@/components/footer/footer.vue';
import DefaultMain from '@/components/index/index.vue';
export default {
    components:{
        DefaultHeader,
        DefaultFooter,
        DefaultMain
    }
}
</script>
<style scoped>  
    html,body{
        height:100vh;
        overflow-y: scroll;
    }
    body{
        overflow-y: scroll;
    }
   .el-header{
       padding:0;
   }
    .el-main{
        padding:0;
        background-color:#c5c5c5;
    }
</style>