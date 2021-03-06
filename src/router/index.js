/*路由器对象模块*/
import Vue from 'vue'
import VueRouter from "vue-router";
import MSite from "@/pages/MSite/MSite";
import Order from "@/pages/Order/Order";
import Profile from "@/pages/Profile/Profile";
import Search from "@/pages/Search/Search";
import Login from "@/pages/Login/Login";
import Shop from "@/pages/Shop/Shop";
import ShopGoods from "@/pages/Shop/ShopGoods/ShopGoods";
import ShopInfo from "@/pages/Shop/ShopInfo/ShopInfo";
import ShopRatings from "@/pages/Shop/ShopRatings/ShopRatings";


//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',
            component:MSite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            //默认路由导航
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/shopgoods',
                    component:ShopGoods
                },
                {
                    path:'/shop/shopinfo',
                    component:ShopInfo
                },
                {
                    path:'/shop/shopratings',
                    component:ShopRatings
                },
                {
                    //默认路由导航
                    path:'',
                    redirect:'/shop/shopgoods'
                }
            ]
        }
    ]
})
