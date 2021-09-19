<template>
    <form action="">
    <ul>
        <li><label for="">会员名：</label> <el-input placeholder="请输入内容" v-model="input" clearable></el-input></li>
        <li><label for="">密码：</label> <el-input placeholder="请输入密码" v-model="input2" show-password></el-input></li>
        <li>
            <input type="submit" value="登录" class="btn" @click="pushShow">
        </li>
    </ul>
  </form>
</template>

<script>
export default {
    name:'Code',
     data() {
      return {
        input: '',
        input2:''
      }
    },
    methods: {
      pushShow(){
        this.$router.push({
          name:'Home',
      })
    },
}
}
</script>

<style>

</style>