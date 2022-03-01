/*通过mutations间接更新state的多个方法对象*/
import {
    reqPosition,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogOut,
    reqShopRatings,
    reqShopGoods,
    reqShopInfo
} from '../api/index'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,

    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,

    /*RECEIVE_SEARCH_SHOPS,

    DECREMENT_FOOD_COUNT,
    INCREMENT_FOOD_COUNT,
    CLEAR_CART,*/
} from "./mutations-types"
export default {
    //异步获取地址
    async getAddress({commit,state}){
        //发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const  result = await reqPosition(geohash)
        //提交一个mutation
        if(result.code === 0){
            const  address = result.data
            commit(RECEIVE_ADDRESS,{address})
        }

    },
    //获取食品分类
    async getFoodCategorys({commit}){
        //发送异步ajax请求
        const  result = await reqFoodCategorys()
        //提交一个mutation
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }

    },
    //获取商品
    async getShops({commit,state}){
        //发送异步ajax请求
        const {longitude, latitude} = state
        const  result = await reqShops(longitude,latitude)
        //提交一个mutation
        if(result.code === 0){
            const  shops = result.data
            commit(RECEIVE_SHOPS,{shops})
        }

    },
    //同步记录用户信息
    recordUser({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },

    //异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo()
        if(result.code === 0){
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, {userInfo})
        }
    },

    //异步登出
    async logOut({commit}){
        const result = await reqLogOut()
        if(result.code === 0){
            //清空用户信息
            commit(RESET_USER_INFO)
        }
    },

    //异步获取商家列表
    async getShopGoods({commit}){
        const result = await reqShopGoods()
        if(result.code === 0){
            const goods = result.data
            commit(RECEIVE_GOODS,{goods})
        }
    },

    //异步获取商家评价列表
    async getShopRatings({commit}){
        const result = await reqShopRatings()
        if(result.code === 0){
            const ratings = result.data
            commit(RECEIVE_RATINGS,{ratings})
        }
    },

    //异步获取商家信息
    async getShopInfo({commit}){
        const result = await reqShopInfo()
        if(result.code === 0){
            const info = result.data
            commit(RECEIVE_INFO,{info})
        }
    }
}
