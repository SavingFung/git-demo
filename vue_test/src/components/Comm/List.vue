<template>
  <div>
    <!-- 快捷导航模块 -->
    <Navbar/>
    <!-- header头部模块制作t -->
    <ListHeader/> 
    <!-- nav模块制作 -->
    <nav class="nav">
        <div class="w">
            <div class="sk_list">
                <ul>
                    <li><a href="javascript:;">品优秒杀</a></li>
                    <li><a href="javascript:;">还想神马</a></li>
                    <li><a href="javascript:;">赶紧冲啊</a></li>
                </ul>
            </div>
            <div class="sk_con">
                <ul>
                    <li v-for="(com,index) in commodity" :key="index"><a href="javascript:;">{{com}}</a></li>
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
            
             <ul class="clearfix">
                <li v-for="(s,index) in sale" :key="index">
                    <img :src="s.img" alt="">
                </li>
            </ul>
        </div>
    </div>
    <!-- 底部模块的制作 -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import ListHeader from './ListHeader.vue'
import Footer from '../Footer.vue'

export default {
    name:'List',
    components:{
        Navbar,
        ListHeader,
        Footer
    },
    data() {
        return {
            sale:[
                {img:require("../../upload/sale/miaosha0.png")},
                {img:require("../../upload/sale/miaosha1.png")},
                {img:require("../../upload/sale/miaosha2.png")},
                {img:require("../../upload/sale/miaosha3.png")},
                {img:require("../../upload/sale/miaosha4.png")},
                {img:require("../../upload/sale/miaosha5.png")},
                {img:require("../../upload/sale/miaosha6.png")},
                {img:require("../../upload/sale/miaosha7.png")},
                {img:require("../../upload/sale/miaosha8.png")},
                {img:require("../../upload/sale/miaosha9.png")},
                {img:require("../../upload/sale/miaosha10.png")},
                {img:require("../../upload/sale/miaosha11.png")},
                {img:require("../../upload/sale/miaosha12.png")},
                {img:require("../../upload/sale/miaosha13.png")},
                {img:require("../../upload/sale/miaosha14.png")},
                {img:require("../../upload/sale/miaosha15.png")},
            ],
            commodity:['潮流服饰','手机','女装','美妆','运动','电器','母婴','男装','更多分类']
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