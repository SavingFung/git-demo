<template>
      <footer class="footer">
        <div class="w">
            <div class="mod_service">
                <ul>
                    <li v-for="(m,index) in modService" :key="index">
                        <h5><img :src="require(`../images/icon${index}.png`)" alt=""></h5>
                        <div class="service_txt">
                            <h4>{{m.title}}</h4>
                            <p>{{m.value}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mod_help">
                <dl v-for="(b,index) in biaoTi" :key="index">
                    <dt>{{b.title}}</dt>
                    <dd v-for="(c,index) in b.content" :key="index">
                        <a href="javascript:;">{{c}}</a>
                    </dd>
                </dl>
                <dl>
                    <dt>帮助中心</dt>
                    <dd>
                        <img src="../images/wx_cz.jpg" alt="">
                        品优购客户端
                    </dd>
                </dl>
            </div>
            <div class="mod_copyright">
                <div class="links">
                    <a href="javascript:;">关于我们</a> | 
                    <a href="javascript:;">联系我们</a> | 
                    <a href="javascript:;">联系客服</a> | 
                    <a href="javascript:;">商家入驻</a> | 
                    <a href="javascript:;">营销中心</a> | 
                    <a href="javascript:;">手机品优购</a> | 
                    <a href="javascript:;">友情链接</a> | 
                    <a href="javascript:;">销售联盟</a> | 
                    <a href="javascript:;">品优购社区</a> |
                    <a href="javascript:;">品优购公益</a> | 
                    <a href="javascript:;">English Site</a> | 
                    <a href="javascript:;">Contact U</a>
                </div>
                <div class="copyright">
                    地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
                    京ICP备08001421号京公网安备110108007702
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name:'Footer',
    data() {
        return {
            biaoTi:[{title:'服务指南',content:['购物流程','会员介绍','生活旅行/团购','常见问题','大家电','联系客服']},
                    {title:'购物指南',content:['免费注册','开通支付宝','支付宝充值']},
                    {title:'优购保障', content:['发票保障','售后规则','缺货赔付']},
                    {title:'支付方式', content:['快捷支付','信用卡','余额宝','花呗','货到付款']},
                    {title:'商家服务', content:['优购规则','商家入驻','商家中心','优购库存','物流服务','运营服务']}
            ],
            modService:[{title:'正品保障',value:'正品保障,提供发票'},
                        {title:'急速物流',value:'急速物流，激素送达'},
                        {title:'无忧售后',value:'7天无理由退换货'},
                        {title:'特色服务',value:'私人定制家电套餐'},
                        {title:'帮助中心',value:'您的购物指南'},
            ]
        }    
    },
}
</script>

<style>
.mod_service ul li h5 {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 8px;
}
</style>