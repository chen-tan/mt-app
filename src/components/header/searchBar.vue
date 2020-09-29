<template>
    <div class="search-bar">
        <el-row class="search-area">
            <el-col :span="5" class="logo">
                <img src="//s0.meituan.net/bs/fe-web-meituan/48d041a/img/logo.png" alt="">
            </el-col>
            <el-col :span="19" class="input-area">
                <el-input 
                 v-model="input" 
                 placeholder="搜索商家或地点"
                 @focus="inputFocus"
                 @mouseleave="inputBlur"
                ></el-input>
                <el-button type="primary" icon="el-icon-search"></el-button>
            </el-col>
        </el-row>
        <el-row class="recent-search" v-if="!input && isFocus" @mouseenter.native="recentFocus">
                <h6>最近搜索</h6>
                <span>删除搜索历史</span>
                <ul class="recent-list">
                    <li class="recent">万岛</li>
                    <li class="recent">荣新馆</li>
                    <li class="recent">蛋白粉</li>
                </ul>
                
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            input:'',
            isFocus:false,
            timer:null
        }
    },
    methods:{
        
        inputFocus(){
            this.isFocus=true;
        },
        inputBlur(){
             this.timer=setTimeout(()=>{
                this.isFocus=false;
            },200);
        },
        recentFocus(){
            clearTimeout(this.timer);
            this.timer=null;

        }
    }
}
</script>
<style lang="scss">
    @import "~@/assets/css/header/searchBar.scss";
</style>