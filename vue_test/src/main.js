//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入ElementUI组件库
import ElementUI from 'element-ui'
//引入ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css'
//引入
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(ElementUI)

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    }
})