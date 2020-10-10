<template>
    <div class="nav-container">
        <div class="index-nav">
            <dl class="all-calssify">
                <dt>全部分类</dt>
                <dd
                v-for="(nav,index) in navList"
                :key="nav.name" 
                class="calssify"
                >
                    <div 
                     class="nav-bar"
                     @mouseenter="changeShowPanel(index,true)"
                     @mouseleave="changeShowPanel(index,false)"
                    >
                        <i class="iconfont" :class="nav.type"></i>
                        <span>{{ nav.name }}</span>
                        <i class="icon-arrow el-icon-arrow-right"></i>
                    </div>
                    <div class="nav-panel" v-if="nav.showPanel">
                        <div
                        v-for="block in nav.items" 
                        :key="block.name"
                        class="nav-block"
                        >
                            <div class="title">
                                <div class="title-left">{{ block.title }}</div>
                                <div class="title-right">
                                    <span class="more">更多</span>
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                            </div>
                            <ul class="content-list">
                                <li     
                                v-for="item in block.items"
                                :key="item" 
                                class="content"
                                >{{ item }}</li>
                            </ul>
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
    
</template>
<script>
import { CLIENT_RENEG_LIMIT } from 'tls'
import Vue from 'vue';
export default {
    data(){
        return {
            navList:[],
            showPanel:false,
        }
    },
    methods:{
        changeShowPanel(index,flag){
            Vue.set(this.navList[index],'showPanel',flag);
        },
    },
    created(){
        this.$axios.get('/api/meituan/index/nav.json').then(res=>{
            this.navList=res.map(item=>{
                Vue.set(item,'showPanel',false);
                return item;
            });
        })
    },
}
</script>
<style lang="scss">
    @import "~@/assets/css/index/nav.scss";
</style>