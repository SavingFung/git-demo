<template>
      <header class="header w">
        <!-- logo模块 -->
        <div class="logo">
            <h1>
                <a href="index.html" title="品优购商城"><img src="../images/logo.png" alt=""></a>
            </h1>
        </div>
        <!-- search搜索模块 -->
        <div class="search">
            <input type="search" name="" id="" placeholder="男人就要买高达">
            <button>搜索</button>
        </div>
        <!-- hotwords模块制作 -->
        <div class="hotwords">
            <a href="javascript:;" class="style_red">优惠购首发</a>
            <a href="javascript:;">亿元优惠</a>
            <a href="javascript:;">9.9元团购</a>
            <a href="javascript:;">美满99减30</a>
            <a href="javascript:;">办公用品</a>
            <a href="javascript:;">电脑</a>
            <a href="javascript:;">通信</a>
        </div>
        <!-- 购物车模块 -->
        <div class="shopcar">
            <router-link to="/carts">我的购物车</router-link>
            <i class="count">3</i>
        </div>
    </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style>

</style>