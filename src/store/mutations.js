/*直接更新state的各个方法对象*/
import Vue from "vue";
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,

    RECEIVE_SEARCH_SHOPS,

    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,

    DECREMENT_FOOD_COUNT,
    INCREMENT_FOOD_COUNT,
    CLEAR_CART,
} from "./mutations-types"

export default {
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state,{userInfo}){
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state){
        state.userInfo = {}
    },

    [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
        state.searchShops = searchShops
    },

    [RECEIVE_GOODS](state,{goods}){
        state.goods = goods
    },
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings = ratings
    },
    [RECEIVE_INFO](state,{info}){
        state.info = info
    },

    [INCREMENT_FOOD_COUNT](state,{food}){
        if(!food.count){
            //购物车中无数据
            /*
            对象，属性，属性值
            */
            Vue.set(food,'count',1)//让新增的属性也有数据绑定getter/setter
            //将food添加到carFoods
            state.cartFoods.push(food)
        }else{
            food.count++
        }


    },
    [DECREMENT_FOOD_COUNT](state,{food}){
        if(food.count) {// 只有有值才去减
            food.count--
            if(food.count===0) {
                // 将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
            }
        }
    },
    [CLEAR_CART](state) {
        //清除food中的count
        state.cartFoods.forEach(food => food.count = 0)
        //将购物车的food数组置空
        state.cartFoods = []
    }

}
