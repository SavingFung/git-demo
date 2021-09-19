<template>
    <ul class="clearfix">
        <li v-for="(a,index) in Appliances" :key="index">
            <img :src="a.img" alt="">
        </li>
    </ul>
</template>

<script>
export default {
    name:'Appliance',
    data() {
        return {
            Appliances:[
                {img:require("../../upload/home_appliance/h0.jpg")},
                {img:require("../../upload/home_appliance/h1.jpg")},
                {img:require("../../upload/home_appliance/h2.jpg")},
                {img:require("../../upload/home_appliance/h3.jpg")},
                {img:require("../../upload/home_appliance/h4.jpg")},
                {img:require("../../upload/home_appliance/h5.jpg")},
                {img:require("../../upload/home_appliance/h6.jpg")},
                {img:require("../../upload/home_appliance/h7.jpg")},
                {img:require("../../upload/home_appliance/h8.jpg")},
                {img:require("../../upload/home_appliance/h9.jpg")},
                {img:require("../../upload/home_appliance/h10.jpg")},
                {img:require("../../upload/home_appliance/h11.jpg")},
                {img:require("../../upload/home_appliance/h12.jpg")},
                {img:require("../../upload/home_appliance/h13.jpg")},
            ],
        }
    },
}
</script>

<style scoped>
ul li img {
    width: 100%;
    height: 100%;
}
</style>