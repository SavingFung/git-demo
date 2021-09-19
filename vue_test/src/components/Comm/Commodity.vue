<template>
  <div>
    <!-- 快捷导航模块 -->
    <Navbar/>
    <!-- header头部模块制作 -->
    <Header/> 
    <!-- nav模块制作 -->
    <nav class="nav">
        <div class="w">
             <div class="dropdown">
                <div class="dt">全部商品分类</div>
            </div>
            <div class="sk_con">
                <ul>
                    <li><router-link to="/shops/costume">潮流服饰</router-link></li>
                    <li><router-link to="/shops/appliance">电器</router-link></li>
                    <li v-for="(com,index) in commodity" :key="index"><router-link to="/shops/phone">{{com}}</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- 列表页主体部分 -->
    <div class="w sk_container">
        <div class="sk_hd">
            <img src="../../upload/bg_0.png" alt="">
        </div>
        <div class="sk_bd">
            <router-view></router-view>
        </div>
    </div>
    <!-- 底部模块的制作 -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import Header from '../Header.vue'
import Footer from '../Footer.vue'

export default {
    name:'Commodity',
    components:{
        Navbar,
        Header,
        Footer
    },
    data() {
        return {
            commodity:['手机','女装','美妆','运动','母婴','男装','更多分类']
        }
    },
}
</script>

<style>
.sk {
    position: absolute;
    left: 190px;
    top: 40px;
    border-left: 1px solid #c81523;
    padding: 3px 0 0  14px;
}
.sk_list {
    float: left;
}
.sk_list  ul li {
    float: left;
}
.sk_list  ul li a {
    display: block;
    line-height: 47px;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
}
.sk_con {
    float: left;
}
.sk_con ul li {
    float: left;
}
.sk_con  ul li a {
    display: block;
    line-height: 49px;
    padding: 0 20px;
    font-size: 14px;
   
}
.sk_con  ul li:last-child a::after {
    content: '\e91e';
    font-family: 'icomoon';
}
.sk_bd ul li {
    overflow: hidden;
    float: left;
    margin-right: 13px;
    width: 290px;
    height: 460px;
    border: 1px solid transparent;
}
.sk_bd ul li:nth-child(4n) {
    margin-right: 0;
}
.sk_bd ul li:hover {
    border: 1px solid #c81523;
}
</style>