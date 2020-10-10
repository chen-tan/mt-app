<template>
    <el-container>
        <el-header height="" padding="">
            <default-header />
        </el-header>
        <el-main >
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
export default {
    components:{
        DefaultHeader,
        DefaultFooter,
    }
}
</script>
<style scoped>  
    
   .el-header{
       padding:0;
       background-color:transparent;
       
   }
    .el-main{
        padding:0;
        background-color:#f8f8f8;
        overflow:unset;
    }

</style>