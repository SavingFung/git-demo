<template>
      <div class="w">
        <div class="main">
            <div class="focus">
               <el-carousel indicator-position="outside">
                 <el-carousel-item v-for="item in imgwrap" :key="item.url">
                     <router-link to="/category"><img :src="item.url" alt=""></router-link>
                 </el-carousel-item>
               </el-carousel>
            </div>
            <div class="newsflash">
                <div class="news">
                    <div class="news-hd">
                        <h5>品优购快报</h5>
                        <a href="javascript:;" class="more">更多</a>
                    </div>
                    <div class="news-bd">
                        <ul>
                            <li><a href="javascript:;"><strong>[特惠]</strong> 每日享折扣优品</a></li>
                            <li><a href="javascript:;"><strong>[重磅]</strong> 百元中秋全品类礼券限领</a></li>
                            <li><a href="javascript:;" @click="sup"><strong>[公告]</strong> iphone 13预售，快来抢购</a></li>
                            <li><a href="javascript:;"><strong>[重磅]</strong> Sory耳机限时抢购，最低一折起</a></li>
                            <li><a href="javascript:;"><strong>[特惠]</strong> 天天特卖</a></li>
                        </ul>
                    </div>
                </div>
                <div class="lifeservice">
                    <ul>
                        <li v-for="(life,index) in lifeService" :key="index">
                            <i><img :src="require(`../images/icons${index}.png`)" alt=""></i>
                            <p>{{life}}</p>
                        </li>
                    </ul>
                </div>
                <div class="bargain">
                    <img src="../upload/bargain.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Main',
    data() {
        return {
            imgwrap:[
                {url:require("../upload/focus1.png")},
                {url:require("../upload/focus2.png")},
                {url:require("../upload/focus3.png")},
                {url:require("../upload/focus4.png")}
            ],
            lifeService:['话费','机票','电影票','游戏','彩票','加油卡','酒店','火车票','众筹','理财','礼品卡','白条']
        }
    },
    methods: {
        sup(){
            alert('别想了！赶紧冲华为吧！！！')
        }
    },
}
</script>

<style>

.lifeservice ul li i {
    display: inline-block;
    width: 24px;
    height: 28px;
    margin-top: 12px;
}
  .el-carousel__container {
      height: 425px !important;
  }
  .el-carousel__item img {
      width: 100%;
      height: 100%;
  }
</style>