<template>
    <div class="nav-container">
        <div class="index-nav">
            <dl class="al-calssify">
                <dt>全部分类</dt>
                <dd
                v-for="nav in navList"
                :key="nav.name" 
                class="calssify"
                >
                    <div class="nav-bar">
                        <i :class="nav.type"></i>
                        <span>{{ nav.name }}</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="nav-panel">
                        <div
                        v-for="block in nav.items" 
                        :key="block.name"
                        class="nav-block"
                        >
                            <div class="title">
                                <div class="title-left">{{ block.name }}</div>
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
export default {
    data(){
        return {
            navList:[],
        }
    },
    created(){
        this.$axios.get('/api/meituan/index/nav.json').then(res=>{
            console.log(res);
            this.navList=res;
        })
    },
}
</script>
<style lang="scss">
    @import "~@/assets/css/index/nav.scss";
</style>