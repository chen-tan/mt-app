<template>
    <div class="search-bar">
        <el-row class="search-area">
            <el-col class="logo">
                <img src="//s0.meituan.net/bs/fe-web-meituan/48d041a/img/logo.png" alt="">
            </el-col>
            <el-col>
                <div class="input-area">
                    <el-input
                     v-model="input" 
                     placeholder="搜索商家或地点"
                     @focus="inputFocus"
                     @blur="inputBlur"
                    ></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                </div>
            </el-col>
        </el-row>
        <el-row class="recent-search" v-if="!input && isFocus">
                <h6>最近搜索</h6>
                <span>删除搜索历史</span>
                <ul class="recent-list">
                    <router-link 
                     v-for="recent in recentList"
                     :key="recent"
                     tag="li" 
                     to="/recent" 
                     class="recent"
                    >{{ recent }}</router-link >
                </ul>
        </el-row>
        <ul class="hotWord-list" v-if="input && isFocus">
            <router-link 
             v-for="(hot,index) in hotPlaceList"
             :key="hot+index"
             tag="li" 
             to="/hotWord" 
             class="hotWord"
            >{{ hot }}</router-link>
        </ul>
        <ul class="typeList">
            <li 
             v-for="type in typeList"
             :key="type"
             class="type"
            >{{ type }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            input:'',
            isFocus:false,
            timer:null,
            recentList:[],
            hotPlaceList:[],
            typeList:['美团外卖','猫眼电影','美团酒店','民宿／公寓','商家入驻','美团公益']
        }
    },
    created(){
        this.$axios.get('/api/meituan/header/searchHotWords.json').then(res=>{
            this.recentList=res;
        })
        this.$axios.get('/api/meituan/header/search.json').then(res=>{
            this.hotPlaceList=res.list;
        })
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
    }
}
</script>
<style lang="scss">
    @import "~@/assets/css/header/searchBar.scss";
</style>