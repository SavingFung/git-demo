<template>
    <div class="w">
        <header>
            <div class="logo">
                <a href="index.html"> <img src="../images/logo.png" alt=""></a>
            </div>
        </header>
        <div class="registerareas">
            <h3>用户登录</h3>
            <div class="reg_form">
              <ul>
               <li>
                <router-link to="/logins/code">密码登录</router-link>
               </li>
               <li>
                <router-link to="/logins/message">短信登陆</router-link>
               </li>
              </ul>
              <br/>
              
              <router-view></router-view>
            </div>
        </div>
        <footer>
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
        </footer>
    </div>
</template>

<script>
export default {
    name:'Login',
}
</script>

<style>
.w {
    width: 1200px;
    margin: 0 auto;
}
header {
    height:113px;
    border-bottom: 2px solid #c81523;
}
.logo {
    padding-top: 18px;
}
.registerareas {
    height: 522px;
    border: 1px solid #ccc;
    margin-top: 20px;
}
.registerareas h3 {
    height: 42px;
    border-bottom: 1px solid #ccc;
    background-color: #ececec;
    line-height: 42px;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 400;
}
.login {
    float: right;
    font-size: 14px;
}
.login a {
    color: #c81523;
}
.reg_form {
    width: 600px;

    margin: 50px auto 0;
}
.reg_form ul li {
    margin-bottom: 20px;
}
.reg_form ul li button {
    width: 100px;
    height: 37px;
}
.reg_form ul li label {
    display: inline-block;
    width: 88px;
    text-align: right;
}
.reg_form ul li .inp {
    width: 242px;
    height: 37px;
    border: 1px solid #ccc;
}
.error {
    color: #c81523;
}
.error_icon,
.success_icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-top: -2px;
}
.success {
    color: green;
}
.safe {
    padding-left: 170px;
}
.safe em {
    padding: 0 12px;
    color: #fff;
}
.ruo {
    background-color: #de1111;
}
.zhong {
    background-color: #40b83f;
}

.qiang {
    background-color: #f79100;
}
.agree {
    padding-left: 95px;
}
.agree input {
    vertical-align: middle;
}
.agree a {
    color: #1ba1e6;
}
.btn {
    width: 200px;
    height: 34px;
    background-color: #c81623;
    font-size: 14px;
    color: #fff;
    margin: 30px 0 0 70px;
}
.mod_copyright {
    text-align: center;
    padding-top: 20px;
}
.links {
    margin-bottom: 15px;
}
.links a {
    margin: 0 3px;
}
.copyright {
    line-height: 20px;
}


</style>