/*包含多个基于state的getter计算属性*/
export default {
    //ShopCart中用到，计算购物车中的食物总数量
    totalCount(state){
        return state.cartFoods.reduce((proTotal,food) => proTotal + food.count,0)
    },
    //ShopCart中用到，计算购物车中的食物总价格
    totalPrice(state){
        return state.cartFoods.reduce((proTotal,food) => proTotal + food.count * food.price,0)
    },

    //ShopRatings组件中用到的，计算满意评价
    positiveSize(state){
        return state.ratings.reduce((proTotal,rating) => proTotal + (rating.rateType===0?1:0),0)
    }
}
