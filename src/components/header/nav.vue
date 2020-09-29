<template>
    <div class="top-nav">
        <ul class="nav-list">
            <li 
             v-for="(nav,index) in newNavList"
             :key="nav.title"
             class="nav"
             @mouseenter="showPanel(index,true)"
             @mouseleave="showPanel(index,false)"
            >
            <span>{{ nav.title }}</span>
            
                <ul 
                 v-if="nav.type==='single' && showBlock[index]"
                 :class="{'my-mt':nav.title==='我的美团',
                             'merchant-center':nav.title==='商家中心',
                             'rules':nav.title==='美团规则'}">
                    <li v-for="detail in nav.detail" :key="detail">{{ detail }}</li>
                </ul>
            <div v-if="nav.type==='multi' && showBlock[index]" class="website">
                <dl 
                 v-for="plate in decsList" 
                 :key="plate.title"
                 :class="{'jiulv':plate.title==='酒店旅游',
                          'food':plate.title==='吃美食',
                          'movie':plate.title==='看电影',
                          }"
                >
                    <dt>{{ plate.title }}</dt>
                    <dd v-for="dot in plate.detail" :key="dot">{{ dot }}</dd>
                </dl>
                <dl v-for="plate in imgList" :key="plate.title" class="app">
                    <dt>{{ plate.title }}</dt>
                    <dd v-for="img in plate.detail" :key="img">
                        <img :src="img" alt="">
                    </dd>
                </dl>
            </div>

            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    data(){
        return {
            showBlock:[],
            navList:[
                {
                    title:'我的美团',
                    type:'single',
                    detail:['我的订单','我的收藏','抵用券','账户设置']
                },{
                    title:'手机APP',
                    type:'single',
                    detail:null
                },{
                    title:'商家中心',
                    type:'single',
                    detail:['美团餐饮商户中心','登录商家中心','美团智能收银','我想合作','手机免费开店','餐饮代理商招募','商家申请开票','免费合作美团排队']
                },{
                    title:'美团规则',
                    type:'single',
                    detail:['规则中心','规则目录','规则评议院']
                },{
                    title:'网站导航',
                    type:'multi',
                    detail:[
                        {
                            title:'酒店旅游',
                            type:'desc',
                            detail:['国际机票','火车票','民宿','经济型酒店','主题酒店','商务酒店','公寓','豪华酒店','客栈','青年旅社','度假酒店','别墅','农家院']
                        },{
                            title:'吃美食',
                            type:'desc',
                            detail:['烤鱼','特色小吃','烧烤','自助餐','火锅','代金券']
                        },{
                            title:'看电影',
                            type:'desc',
                            detail:['热映电影','热门影院','热映电影口碑榜','最受期待电影','国内票房榜','北美票房榜','电影排行榜']
                        },{
                            title:'手机应用',
                            type:'img',
                            detail:[
                                '//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png',
                                '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
                                'https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png',
                                '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
                                '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png'
                            ]
                        }
                    ]
                }
            ],
        }
    },
    computed:{
        newNavList(){
            this.navList.forEach(item=>item.showBlock=false);
            return this.navList;
        },
        decsList(){
            const lastDetial = this.navList[this.navList.length-1].detail;
            return lastDetial.filter(item=>item.type==='desc');
        },
        imgList(){
            const lastDetial = this.navList[this.navList.length-1].detail;
            return lastDetial.filter(item=>item.type==='img');
        },
        
    },
    methods:{
        showPanel(index,flag){
            Vue.set(this.showBlock,index,flag);
        },
        getShowBlock(){
            for(let i=0;i<this.navList.length;i++){
                this.showBlock.push(false);
            }
        }
    }
}
//   vm.navList.forEach(item=>item.showBlock=false);
</script>