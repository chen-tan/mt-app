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
    html,body{
        height:100vh;
        overflow-y: scroll;
        background-color:red;
    }
    body{
        overflow-y: scroll;
        background-color:red;
    }
   .el-header{
       padding:0;

   }
</style>