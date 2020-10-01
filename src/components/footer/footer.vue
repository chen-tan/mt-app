<template>
  <div class="default-footer">
    <div class="other-links">
      <div v-for="col in linksList" :key="col.col" class="links-column">
        <dl
          v-for="link in col.arr"
          :key="link.title"
          :class="{
            'user-help': link.title === '用户帮助',
            'mt-service': link.title === '美团服务',
            'merchant-corporation': link.title === '商家合作',
            'agent-join': link.title === '代理商加盟',
            'mt-rules': link.title === '美团规则',
            'mt-attension': link.title === '关注美团',
            'company-info': link.title === '公司信息',
            'clean-government': link.title === '廉正举报',
            'knowledge-right': link.title === '知识产权',
            'consumer-service': link.title === '消费者服务热线',
            'merchant-service': link.title === '商家服务热线',
            'mt-service': link.title === '投诉举报专区',
            'mt-service': link.title === '商家自助入驻美团入口',
            'mt-service': link.title === '供应商注册入口',
          }"
        >
          <dt>{{ link.title }}</dt>
          <template v-if="link.detail">
            <dd v-for="item in link.detail" :key="item">{{ item }}</dd>
          </template>
        </dl>
      </div>
    </div>
    <div class="page-info">
      <div class="platform">
          <p>
              <span>©美团网团购 meituan.com</span>
              <span>京ICP证070791号</span>
              <span>京ICP备10211739号</span>
          </p>
          <p>广播电视节目制作经营许可证（京）字第03889号</p>
          <p>
              <span>食品经营许可证</span>
              <span>互联网药品信息服务资格证</span>
          </p>
          <p>医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</p>
      </div>
      <div class="qulifications">
          <p class="police-num">
              <img src="https://p0.meituan.net/travelcube/d0289dc0a46fc5b15b3363ffa78cf6c719256.png" alt="">
              <span>京公网安备 11000002002052号</span>
          </p>
          <div class="img-list">
              <div class="img-info">
                  <img src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e" alt="">
                  <span>北京三快科技有限公司</span>
              </div>
              <div class="img-info">
                  <img src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e" alt="">
                  <span>北京三快科技有限公司</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      linksList: [
        {
          col: 0,
          arr: [
            {
              title: "用户帮助",
              detail: [
                "申请退款",
                "查看美团券密码",
                "常见问题",
                "用户协议",
                "隐私政策",
                "反诈骗公告",
                "消费者权益保障"],
            },
            {
              title: "美团服务",
              detail: [
                "美团外卖",
                "美团酒店",
                "猫眼电影",
                "美团配送",
                "美团云",
                "大众点评",
                "美团民宿",
                "无人配送"
              ],
            },
          ],
        },
        {
          col: 1,
          arr: [
            {
              title: "商家合作",
              detail: [
                "美团餐饮商户中心",
                "美食商家入驻(非外卖)",
                "美团外卖开店申请",
                "美团收银官网",
                "外卖配送加盟申请",
                "美团点评餐饮学院",
                "酒店商家入驻",
                "境内度假商家入驻",
                "综合商家入驻",
                "美团民宿房东商家入驻",
                "商家开票申请",
                "美团点评智能收银机",
                "美团点评餐饮开放平台",
                "美团点评收单",
                "免费使用美团排队",
                "快驴进货商家合作",
                "美团闪购商家入驻"
              ],
            },
          ],
        },
        {
          col: 2,
          arr: [
            {
              title: "代理商加盟",
              detail: [
                "美团外卖代理商招募",
                "到店餐饮代理商招募",
                "非餐饮代理商招募",
                "美团联盟",
                "美团收银招募线上分销商",
                "美团点评5S服务商招募",
                "美团收单渠道代理商招募"
            ],
            },
            {
              title: "美团规则",
              detail: ["规则中心", "规则目录", "规则评议院"],
            },
          ],
        },
        {
          col: 3,
          arr: [
            {
              title: "关注美团",
              detail: ["美团新浪微博"],
            },
            {
              title: "公司信息",
              detail: [
                "关于我们",
                "投资者关系",
                "加入我们",
                "商户诚信公约及管理办法",
                "保险经纪资质"
              ],
            },
            {
              title: "廉正举报",
              detail: ["廉正举报平台"],
            },
            {
              title: "知识产权",
              detail: ["知识产权维权平台"],
            },
          ],
        },
        {
          col: 4,
          arr: [
            {
              title: "消费者服务热线",
              detail: [
                "外卖消费者：10109777",
                "猫眼消费者：10105335",
                "其他消费者：10107888",
              ],
            },
            {
              title: "商家服务热线",
              detail: [
                "外卖&餐饮商家：10105557",
                "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107",
              ],
            },
            {
              title: "投诉举报专区",
              detail: [
                "违法和不良信息举报电话：4006018900",
                "举报邮箱：tousujubao@meituan.com",
                "网上有害信息举报",
              ],
            },
            {
              title: "商家自助入驻美团入口",
              detail: null,
            },
            {
              title: "供应商注册入口",
              detail: null,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/footer/footer.scss";
</style>