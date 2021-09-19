<template>
      <section class="shortcut">
        <div class="w">
            <div class="fl">
                <ul>
                    <li>品优购欢迎您！&nbsp;</li>
                    <li>
                        <router-link to="/logins">请登录</router-link> &nbsp; <router-link to="/me" class="style_red">免费注册</router-link>
                    </li>
                </ul>
            </div>
            <div class="fr">
                <ul>
                    <li>我的订单</li>
                    <li></li>
                    <li class="arrow-icon">我的品优购</li>
                    <li></li>
                    <li>品优购会员</li>
                    <li></li>
                    <li>企业采购</li>
                    <li></li>
                    <li class="arrow-icon">关注品优购</li>
                    <li></li>
                    <li class="arrow-icon">客户服务</li>
                    <li></li>
                    <li class="arrow-icon">网站导航</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Navbar',
}
</script>

<style>
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}

.shortcut ul li {
    float: left;
}
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
}
</style>