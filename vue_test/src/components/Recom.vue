<template>
      <div class="w recom">
        <div class="recom_hd">
            <img src="../images/recom.png" alt="">
        </div>
        <div class="recom_bd">
            <ul>
                <li><img src="../upload/recom_01.jpg" alt=""></li>
                <li><img src="../upload/recom_02.jpg" alt=""></li>
                <li><img src="../upload/recom_03.jpg" alt=""></li>
                <li><img src="../upload/recom_04.jpg" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Recom'
}
</script>

<style>

.recom {
    height: 163px;
    background-color: #ebebeb;
    margin-top: 12px;
}

.recom_hd {
    float: left;
    height: 163px;
    width: 205px;
    background-color: #5c5251;
    text-align: center;
    padding-top: 30px;
}

.recom_bd {
    float: left;
}

.recom_bd ul li {
    position: relative;
    float: left;
}

.recom_bd ul li img {
    width: 248px;
    height: 163px;
}

.recom_bd ul li:nth-child(-n+3)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 10px;
    width: 1px;
    height: 145px;
    background-color: #ddd;
}

</style>