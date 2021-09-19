<template>
  <div>
    <!-- 顶部快捷导航 -->
    <div class="shortcut">
        <div class="w">
            <div class="fl">
                <ul>
                    <li>品优购欢迎您！ </li>
                    <li>陈奕迅先生</li>
                </ul>
            </div>
            <div class="fr">
                <ul>
                    <li><a href="javascript:;">我的订单</a></li>
                    <li class="spacer"></li>
                    <li class="arrow-icon"><a href="javascript:;">我的品优购</a></li>
                    <li class="spacer"></li>
                    <li><a href="javascript:;">品优购会员</a></li>
                    <li class="spacer"></li>
                    <li><a href="javascript:;">企业采购</a></li>
                    <li class="spacer"></li>
                    <li class="arrow-icon"><a href="javascript:;">关注品优购</a></li>
                    <li class="spacer"></li>
                    <li class="arrow-icon"><a href="javascript:;">客户服务</a></li>
                    <li class="spacer"></li>
                    <li class="arrow-icon"><a href="javascript:;">网站导航</a> </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="car-header">
        <div class="w">
            <div class="car-logo">
                <img src="../images/logo.png" alt=""> <b>购物车</b>
            </div>
        </div>
    </div>
    
    <div class="c-container">
        <div class="w">
            <div class="cart-filter-bar">
                <em>全部商品</em>
            </div>
            <!-- 购物车主要核心区域 -->
            <div class="cart-warp">
                <!-- 头部全选模块 -->
                <div class="cart-thead">
                    <div class="t-checkbox">
                        <input type="checkbox" v-model="isAll" class="checkall"> 全选
                    </div>
                    <div class="t-goods">商品</div>
                    <div class="t-price">单价</div>
                    <div class="t-num">数量</div>
                    <div class="t-sum">小计</div>
                    <div class="t-action">操作</div>
                </div>
                <!-- 商品详细模块 -->
                <div class="cart-item-list">
                    <div class="cart-item" check-cart-item-class="check-cart-item" v-for="(item,index) in shops" :key="item.id">
                        <div class="p-checkbox">
                            <input type="checkbox" class="j-checkbox" :checked="item.done" @change="handleCheck(item.id)">
                        </div>
                        <div class="p-goods">
                            <div class="p-img">
                                <img :src="item.url" alt="">
                            </div>
                            <div class="p-msg">{{item.data}}</div>
                        </div>
                        <div class="p-price">￥{{item.price}}</div>
                        <div class="p-num">
                            <div class="quantity-form">
                                <button class="decrement" @click="decrement(index)" :disabled="item.count <= 1">-</button>
                                <input type="text" class="itxt" :value="`${item.count}`">
                                <button class="increment" @click="increment(index)">+</button>
                            </div>
                        </div>
                        <div class="p-sum">￥{{item.showPrice}}</div>
                        <div class="p-action"><a href="javascript:;" @click="removeHandler(item.id)">删除</a></div>
                    </div>
                </div>

                <!-- 结算模块 -->
                <div class="cart-floatbar">
                    <div class="select-all">
                        <input type="checkbox" v-model="isAll" class="checkall">全选
                    </div>
                    <div class="operation">
                        <a href="javascript:;" class="remove-batch" @click="clearAllTodo"> 删除选中的商品</a>
                        <a href="javascript:;" class="clear-all" @click="clearAll">清理购物车</a>
                    </div>
                    <div class="toolbar-right">
                        <div class="amount-sum">已经选<em>{{doneTotal}}</em>件商品</div>
                        <div class="price-sum">总价： <em>￥{{totalPrice}}</em></div>
                        <div class="btn-area">去结算</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- 底部模块的制作 -->
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
    name:'Cart',
    components:{
        Footer
    },
    data() {
        return {
            shops:[
                {id:'001',
                 url:require("../upload/p0.png"),
                 data:'iPhoneXR（无充电器耳机版）128G 全网通4G手机',
                 price:3987,
                 count:1,
                 showPrice:3987,
                 done:false
                },
                {id:'002',
                 url:require("../upload/p1.png"),
                 data:'AIR JORDAN 1 轻便休闲 男款篮球鞋',
                 price:969,
                 count:1,
                 showPrice:969,
                 done:false
                },
                {id:'003',
                 url:require("../upload/p2.png"),
                 data:'索尼 WH-1000XM3国行高解析度蓝牙降噪头戴式耳机YM',
                 price:1300,
                 count:1,
                 showPrice:1300,
                 done:false
                },
            ],
            
        } 
    },
    methods: {
        decrement(index){
            this.shops[index].count --
            this.shops[index].showPrice -= this.shops[index].price
        },
        increment(index){
            this.shops[index].count ++
            this.shops[index].showPrice += this.shops[index].price
        },
        removeHandler(id){
            this.shops = this.shops.filter((item)=>{
                return item.id !== id
            })
        },
        handleCheck(id){
            this.shops.forEach((item)=>{
            if(item.id===id) item.done = !item.done
            })
        },
        checkAllTodo(done){
            this.shops.forEach((item)=>{
            item.done = done
            })
        },
        clearAllTodo(){
            this.shops = this.shops.filter((item)=>{
            return !item.done
            })
        },
        clearAll(){
            this.shops = this.shops.filter((item)=>{
                return item.done = true
                
            })
            this.clearAllTodo()
        }
    },
    computed:{
        totalPrice(){
            let totalPrice = 0
            for(let i = 0;i < this.shops.length;i++){
                totalPrice +=this.shops[i].showPrice
            }
            return totalPrice
        },
        total(){
        return this.shops.length
        },
        doneTotal(){
            let i = 0
            this.shops.forEach((item)=>{
                if (item.done) i++
            })
            return i
      },
        isAll:{
        get(){
          return this.doneTotal === this.total && this.total > 0
        },
        set(value){
          this.checkAllTodo(value)
        }
      }
    }
}
</script>

<style scoped>
.car-header {
    padding: 20px 0;
}

.car-logo img {
    vertical-align: middle;
}

.car-logo b {
    font-size: 20px;
    margin-top: 20px;
    margin-left: 10px;
}

.cart-filter-bar {
    font-size: 16px;
    color: #E2231A;
    font-weight: 700;
}

.cart-filter-bar em {
    padding: 5px;
    border-bottom: 1px solid #E2231A;
}

.cart-thead {
    height: 32px;
    line-height: 32px;
    margin: 5px 0 10px;
    padding: 5px 0;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    border-top: 0;
    position: relative;
}

.cart-thead>div,
.cart-item>div {
    float: left;
}

.t-checkbox,
.p-checkbox {
    height: 18px;
    line-height: 18px;
    padding-top: 7px;
    width: 122px;
    padding-left: 11px;
}

.t-goods {
    width: 440px;
}

.t-price {
    width: 120px;
    padding-right: 40px;
    text-align: right;
}

.t-num {
    width: 150px;
    text-align: center;
}

.t-sum {
    width: 100px;
    text-align: right;
}

.t-action {
    width: 130px;
    text-align: right;
}

.cart-item {
    height: 160px;
    border-style: solid;
    border-width: 2px 1px 1px;
    border-color: #aaa #f1f1f1 #f1f1f1;
    background: #fff;
    padding-top: 14px;
    margin: 15px 0;
}

.check-cart-item {
    background: #fff4e8;
}

.p-checkbox {
    width: 50px;
}

.p-goods {
    margin-top: 8px;
    width: 565px;
}

.p-img {
    float: left;
    width: 80px;
    height: 80px;
    border: 1px solid #ccc;
    padding: 5px;
}
.p-img img {
    width: 100%;
}

.p-msg {
    float: left;
    width: 210px;
    margin: 0 10px;
}

.p-price {
    width: 110px;
}

.quantity-form {
    width: 80px;
    height: 22px;
}

.p-num {
    width: 170px;
}

.decrement,
.increment {
    float: left;
    border: 1px solid #cacbcb;
    height: 18px;
    line-height: 18px;
    padding: 1px 0;
    width: 16px;
    text-align: center;
    color: #666;
    margin: 0;
    background: #fff;
    margin-left: -1px;
}

.itxt {
    float: left;
    border: 1px solid #cacbcb;
    width: 42px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    padding: 1px;
    margin: 0;
    margin-left: -1px;
    font-size: 12px;
    font-family: verdana;
    color: #333;
    -webkit-appearance: none;
}

.p-sum {
    font-weight: 700;
    width: 145px;
}


/* 结算模块 */

.cart-floatbar {
    height: 50px;
    border: 1px solid #f0f0f0;
    background: #fff;
    position: relative;
    margin-bottom: 50px;
    line-height: 50px;
}

.select-all {
    float: left;
    height: 18px;
    line-height: 18px;
    padding: 16px 0 16px 9px;
    white-space: nowrap;
}

.select-all input {
    vertical-align: middle;
    display: inline-block;
    margin-right: 5px;
}

.operation {
    float: left;
    width: 200px;
    margin-left: 40px;
}

.clear-all {
    font-weight: 700;
    margin: 0 20px;
}

.toolbar-right {
    float: right;
}

.amount-sum {
    float: left;
}

.amount-sum em {
    font-weight: 700;
    color: #E2231A;
    padding: 0 3px;
}

.price-sum {
    float: left;
    margin: 0 15px;
}

.price-sum em {
    font-size: 16px;
    color: #E2231A;
    font-weight: 700;
}

.btn-area {
    font-weight: 700;
    width: 94px;
    height: 52px;
    line-height: 52px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    background: #e54346;
    overflow: hidden;
}
</style>