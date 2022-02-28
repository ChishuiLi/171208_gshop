/*通过mutations间接更新state的多个方法对象*/
import {
    reqPosition,
    reqFoodCategorys,
    reqShops,
    reqUserInfo
} from '../api/index'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    /*RESET_USER_INFO,

    RECEIVE_SEARCH_SHOPS,

    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,

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

    //重置用户信息（退出登录）
    //resetUserInfo({commit}){
    //    const userInfo = {}
    //    commit(RESET_USER_INFO,{userInfo})
    //}
}
