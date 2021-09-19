<template>
    <ul class="clearfix">
        <li v-for="(p,index) in phones" :key="index">
            <img :src="p.img" alt="">
        </li>
    </ul>
</template>

<script>
export default {
    name:'Phone',
    data() {
        return {
            phones:[
                {img:require("../../upload/phone/phone0.jpg")},
                {img:require("../../upload/phone/phone1.jpg")},
                {img:require("../../upload/phone/phone2.jpg")},
                {img:require("../../upload/phone/phone3.jpg")},
                {img:require("../../upload/phone/phone4.jpg")},
                {img:require("../../upload/phone/phone5.jpg")},
                {img:require("../../upload/phone/phone6.jpg")},
                {img:require("../../upload/phone/phone7.jpg")},
                {img:require("../../upload/phone/phone8.jpg")},
                {img:require("../../upload/phone/phone9.jpg")},
                {img:require("../../upload/phone/phone10.jpg")},
                {img:require("../../upload/phone/phone11.jpg")},
                {img:require("../../upload/phone/phone12.jpg")},
                {img:require("../../upload/phone/phone13.jpg")},
                {img:require("../../upload/phone/phone14.jpg")},
                {img:require("../../upload/phone/phone15.jpg")},
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