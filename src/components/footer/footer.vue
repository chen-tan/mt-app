<template>
    <div class="default-footer">
        <div class="other-links">
            <dl v-for="link in linksList" :key="link.title">
                <dt>{{ link.title }}</dt>
                <template v-if="link.detail">
                    <dd v-for="item in link.detail" :key="item">{{ item }}</dd>
                </template>
                <dd></dd>
            </dl>
        </div>
        <div class="page-info">
            <div class="platform"></div>
            <div class="qulifications"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            linksList:[
                {
                    title:'用户帮助',
                    detail:['申请退款','查看美团券密码','常见问题','用户协议','隐私政策','反诈骗公告','消费者权益保障']
                },{
                    title:'美团服务',
                    detail:['美团外卖','美团酒店','猫眼电影','美团配送','美团云','大众点评','美团民宿','无人配送']
                },{
                    title:'商家合作',
                    detail:['美团餐饮商户中心','美食商家入驻(非外卖)','美团外卖开店申请','美团收银官网','外卖配送加盟申请','美团点评餐饮学院','酒店商家入驻','境内度假商家入驻','综合商家入驻','美团民宿房东商家入驻','商家开票申请','美团点评智能收银机','美团点评餐饮开放平台','美团点评收单','免费使用美团排队','快驴进货商家合作','美团闪购商家入驻']
                },{
                    title:'代理商加盟',
                    detail:['美团外卖代理商招募','到店餐饮代理商招募','非餐饮代理商招募','美团联盟','美团收银招募线上分销商','美团点评5S服务商招募','美团收单渠道代理商招募']
                },{
                    title:'美团规则',
                    detail:['规则中心','规则目录','规则评议院']
                },{
                    title:'关注美团',
                    detail:['美团新浪微博']
                },{
                    title:'公司信息',
                    detail:['关于我们','投资者关系','加入我们','商户诚信公约及管理办法','保险经纪资质']
                },{
                    title:'廉正举报',
                    detail:['廉正举报平台']
                },{
                    title:'知识产权',
                    detail:['知识产权维权平台']
                },{
                    title:'消费者服务热线',
                    detail:['外卖消费者：10109777','猫眼消费者：10105335','其他消费者：10107888']
                },{
                    title:'商家服务热线',
                    detail:['外卖&餐饮商家：10105557','休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107']
                },{
                    title:'投诉举报专区',
                    detail:['违法和不良信息举报电话：4006018900','举报邮箱：tousujubao@meituan.com','网上有害信息举报']
                },{
                    title:'商家自助入驻美团入口',
                    detail:null
                },{
                    title:'供应商注册入口',
                    detail:null
                }
            ]
        }
    }
}




















</script>