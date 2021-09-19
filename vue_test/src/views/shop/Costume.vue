<template>
    <ul class="clearfix">
        <li v-for="(c,index) in Costumes" :key="index">
            <img :src="c.img" alt="">
        </li>
    </ul>
</template>

<script>
export default {
    name:'Costume',
    data() {
        return {
            Costumes:[
                {img:require("../../upload/costume/c0.jpg")},
                {img:require("../../upload/costume/c1.jpg")},
                {img:require("../../upload/costume/c2.jpg")},
                {img:require("../../upload/costume/c3.jpg")},
                {img:require("../../upload/costume/c4.jpg")},
                {img:require("../../upload/costume/c5.jpg")},
                {img:require("../../upload/costume/c6.jpg")},
                {img:require("../../upload/costume/c7.jpg")},
                {img:require("../../upload/costume/c8.jpg")},
                {img:require("../../upload/costume/c9.jpg")},
                {img:require("../../upload/costume/c10.jpg")},
                {img:require("../../upload/costume/c11.jpg")},
                {img:require("../../upload/costume/c12.jpg")},
                {img:require("../../upload/costume/c13.jpg")},
                {img:require("../../upload/costume/c14.jpg")},
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