<template>
    <div class="top-nav">
        <ul class="nav-list">
            <li 
             v-for="nav in navTitleList"
             :key="nav.title"
             class="nav"
             @mouseenter="showPanel(nav.arr)"
            >{{ nav.title }}</li>
        </ul>
        <ul class="my-mt" v-if="showMyMt">
            <li
             v-for="mt in myMtList"
             :key="mt"
            >{{ mt }}</li>
        </ul>
        <ul class="business-center" v-if="showBusiness">
            <li 
             v-for="business in businessCenterList"
             :key="business"
             class="business"
            >
                {{ business }}
            </li>
        </ul>
        <ul class="rules" v-if="showRules">
            <li v-for="rule in rulesCenterList" :key="rule">{{ rule }}</li>
        </ul>
        <div class="website" v-if="showWeb">
                <dl 
                v-for="web in decsWebList"
                :key="web.title"
                :class="{jiulv: web.title==='酒店旅游',
                        food:web.title==='吃美食',
                        movie:web.title==='看电影'  }"
                >
                    <dt>{{ web.title }}</dt>
                    <dd v-for="item in web.detail" :key="item">{{ item }}</dd>
                </dl>
                <dl class="app"  v-for="app in appWebList" :key="app">
                    <dt>{{ app.title }}</dt>
                    <dd v-for="url in app.detail" :key="url">
                        <img :src="url" alt="">
                    </dd>
                </dl>            
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            showMyMt:false,
            showBusiness:false,
            showRules:false,
            showWeb:false,
            navTitleList:[
                {title:'我的美团',arr:'myMtList'},
                {title:'手机APP',arr:null},
                {title:'商家中心',arr:'businessCenterList'},
                {title:'美团规则',arr:'rulesCenterList'},
                {title:'网站导航',arr:'websiteList'}
                ],
            myMtList:['我的订单','我的收藏','抵用券','账户设置'],
            businessCenterList:['美团餐饮商户中心','登录商家中心','美团智能收银','我想合作','手机免费开店','餐饮代理商招募','商家申请开票','免费合作美团排队'],
            rulesCenterList:['规则中心','规则目录','规则评议院'],
            websiteList:[
                {
                    title:'酒店旅游',
                    type:'decs',
                    detail:['国际机票','火车票','民宿','经济型酒店','主题酒店','商务酒店','公寓','豪华酒店','客栈','青年旅社','度假酒店','别墅','农家院']
                },{
                    title:'吃美食',
                    type:'decs',
                    detail:['烤鱼','特色小吃','烧烤','自助餐','火锅','代金券']
                },{
                    title:'看电影',
                    type:'decs',
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
            ],
            
        }
    },
    computed:{
        decsWebList(){
            return this.websiteList.filter(item=>item.type==='decs');
        },
        appWebList(){
            return this.websiteList.filter(item=>item.type==='img')
        }
    },
    methods:{
        showPanel(list){
            // if(list===null)return;
            console.log(list);
        }
    }
}
</script>