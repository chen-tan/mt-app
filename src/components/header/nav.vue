<template>
    <div class="top-nav">
        <ul class="nav-list">
            <li 
             v-for="nav in navTitleList"
             :key="nav"
             class="nav"
            >{{ nav }}</li>
        </ul>
        <ul class="my-mt">
            <li
             v-for="mt in myMtList"
             :key="mt"
            >{{ mt }}</li>
        </ul>
        <ul class="business-center">
            <li 
             v-for="business in businessCenterList"
             :key="business"
             class="business"
            >
                {{ business }}
            </li>
        </ul>
        <dl class="nav-jiulv">
            <dt></dt>
            <dd></dd>
        </dl>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navTitleList:['我的美团','手机APP','商家中心','美团规则','网站导航'],
            myMtList:['我的订单','我的收藏','抵用券','账户设置'],
            businessCenterList:['美团餐饮商户中心','登录商家中心','美团智能收银','我想合作','手机免费开店','餐饮代理商招募','商家申请开票','免费合作美团排队'],
            rulesCenterList:['规则中心','规则目录','规则评议院'],
            websiteList:[
                {
                    title:'酒店旅游',
                    detail:['国际机票','火车票','民宿','经济型酒店','主题酒店','商务酒店','公寓','客栈','青年旅社','度假酒店','别墅','农家院']
                },{
                    title:'吃美食',
                    detail:['烤鱼','特色小吃','烧烤','自助餐','火锅','代金券']
                },{
                    title:'看电影',
                    detail:['热映电影','热门影院','热映电影口碑榜','最受期待电影','国内票房榜','北美票房榜','电影排行榜']
                }
            ],
            
        }
    }
}
</script>