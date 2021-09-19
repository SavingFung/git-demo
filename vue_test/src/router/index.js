//该文件用于创建整个应用的路由器
import VueRouter from "vue-router"
//引入组件
import Home from '../views/home/Home'
import Carts from '../views/carts/Carts'
import Category from '../views/category/Category'
import Me from '../views/me/Me'
import Logins from '../views/login/Logins'
import Code from '../views/login/Code'
import Message from '../views/login/Message'
import Shops from '../views/shop/Shops'
import Phone from '../views/shop/Phone'
import Appliance from '../views/shop/Appliance'
import Costume from '../views/shop/Costume'

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [{
            path: '*',
            redirect: './home'
        },
        {
            name: 'Home',
            path: '/home',
            component: Home

        }, {
            name: 'Carts',
            path: '/carts',
            component: Carts

        },
        {
            name: 'Category',
            path: '/category',
            component: Category

        },
        {
            name: 'Me',
            path: '/me',
            component: Me

        },
        {
            name: 'Logins',
            path: '/logins',
            component: Logins,
            children: [{
                    path: '',
                    redirect: 'code'
                },
                {
                    path: 'code',
                    component: Code
                },
                {
                    path: 'message',
                    component: Message
                }
            ]
        },
        {
            name: 'Shops',
            path: '/shops',
            component: Shops,
            children: [{
                    path: '',
                    redirect: 'phone'
                },
                {
                    path: 'phone',
                    component: Phone
                },
                {
                    path: 'appliance',
                    component: Appliance
                },
                {
                    path: 'costume',
                    component: Costume
                }
            ]
        },
    ]
})

export default router