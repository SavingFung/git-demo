<template>
  <form action="">
    <ul>
        <li><label for="">手机号：</label> <el-input placeholder="请输入内容" v-model="input" clearable></el-input></li>
        <li><label for="">短信验证码：</label> <el-input placeholder="请输入内容" v-model="input2" clearable></el-input> <button @click="note">获取验证码</button></li>
        <li>
            <input type="submit" value="登录" class="btn" @click="pushShow">
        </li>
    </ul>
  </form>
</template>

<script>
export default {
    name:'Message',
        data() {
      return {
        input: '',
        input2:''
      }
    },
    methods: {
        note(){
            alert('暂时没这功能...')
        },
        pushShow(){
            this.$router.push({
            name:'Home',
      })
    },
    },
}
</script>

<style>

</style>