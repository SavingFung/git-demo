<template>
  <div>
    <!-- 快捷导航模块 -->
    <Navbar/>
    <!-- header头部模块 -->
    <Header/>
    <!-- nav模块 -->
    <Nav/>
    <!-- 首页专有的模块 main -->
    <Main/>
    <!-- 推荐模块-->
    <Recom/>
    <!-- 楼层区域 -->
    <Floor/>
    <!-- 底部模块 -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Header from './Header.vue'
import Nav from './Nav.vue'
import Main from './Main.vue'
import Recom from './Recom.vue'
import Floor from './Floor.vue'
import Footer from './Footer.vue'

export default {
    name:'Homes',
    components:{
            Navbar,
            Header,
            Nav,
            Main,
            Recom,
            Floor,
            Footer,
            
		}
}
</script>

<style>

</style>