<template>
  <div>
    <div class="goods">
      <!--current-->
      <div class="menu-wrapper">
        <ul style="margin:0px;padding: 0px">
          <li class="menu-item"
              :class="{current:currentIndex === index}"
              v-for="(good,index) in goods"
              :key="index"
              @click="clickMenuItem(index)"
          >
            <span class="text bottom-border-1px" >
              <img class="icon"
                   :src="good.icon" v-if="good.icon">
                  {{ good.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul style="margin:0px;padding: 0px" ref="foodsUL">
          <li class="food-list-hook"
              style="list-style-type: none"
              v-for="(good,index) in goods"
              :key="index"
          >
            <h1 class="title">{{ good.name }}</h1>
            <ul style="margin:0px;padding: 0px">
              <li class="food-item bottom-border-1px"
                  v-for="(food,index) in good.foods"
                  :key="index"
                  @click="showFood(food)"
              >
                <div class="icon" >
                  <img width="57" height="57"
                       :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率 {{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart/>
    </div>
    <Food :food="food" ref="food"/>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import {mapState} from 'vuex'
import CartControl from "@/components/CartControl/CartControl";
import Food from "@/components/Food/Food";
import ShopCart from "@/components/ShopCart/ShopCart";
export default {
  name: "ShopGoods",
  components:{
    Food,
    CartControl,
    ShopCart
  },
  data(){
    return{
      scrollY:0,//右侧滑动的Y坐标（滑动过程中实时监测）
      tops:[],//所有右侧分类li的top组成的数组 （列表第一次显示后就不再变化）
      food:{},//点击时显示详情的food
    }
  },
  computed:{
    ...mapState(['goods']),

    //计算得到当前分类的下标
    currentIndex(){
      //得到条件数据
      const {scrollY,tops} = this
      //根据条件计算产生一个结果
      const index = tops.findIndex((top,index) => {
        //scrollY大于等于当前top值，小于下一个index的top值
        return  scrollY >= top && scrollY < tops[index+1]
      })
      //返回结果
      return index
    }
  },
  mounted() {
    this.$store.dispatch('getShopGoods',() => { //数据更新后执行
      this.$nextTick(() => { //列表数据更新后显示
        this._initScroll()
        this._initTops()
      })
    })
  },
  methods:{
    //初始化滚动
    _initScroll(){
        new BScroll('.menu-wrapper',{
          click:true,
        })
        this.foodsScroll = new BScroll('.foods-wrapper',{
          probeType: 2, //因为惯性滑动不会触发
          click:true
        })

        //给右侧列表绑定scroll监听
        this.foodsScroll.on('scroll',({x,y}) => {
          //console.log(x,y)
          this.scrollY = Math.abs(y)
        })

        //给右侧列表绑定scroll结束的监听
        this.foodsScroll.on('scrollEnd',({x,y}) => {
          //console.log('########',x,y)
          this.scrollY = Math.abs(y)
        })
    },

    //初始化tops
    _initTops(){
      //1.初始化tops
      const tops = []
      let top = 0
      tops.push(top)
      //2.收集
      //找到所有分类的li
      const lis = this.$refs.foodsUL.getElementsByClassName('food-list-hook')
      //lis伪数组变成真实数组，能将具有length属性的对象转变为真实数组
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.clientHeight
        tops.push(top)
      })
      //3.更新数据
      this.tops = tops
      //console.log(tops)
    },

    clickMenuItem(index){
      //console.log(index)
      //使用右侧列表滑动到对应的位置

      //得到目标位置的scrollY
      const scrollY = this.tops[index]
      //立即更新scrollY（让点击的分类项成为当前分类）
      this.scrollY = scrollY
      //平滑滑动右侧列表
      this.foodsScroll.scrollTo(0,-scrollY,1000)
    },

    //显示点击的food
    showFood(food){
      //设置food
      this.food = food
      //显示或隐藏food组件(在父组件中调用子组件的方法)
      //方法一：通过ref标签调用子组件方法
      this.$refs.food.toggleShow()
      //方法二：通过全局事件总线触发
      //this.$bus.$emit('isShow')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
.goods
  display: flex
  position: absolute
  top: 220px
  bottom: 46px
  width: 100%
  background: #fff;
  overflow: hidden
  .menu-wrapper
    flex: 0 0 80px
    width: 80px
    background: #f3f5f7
    .menu-item
      display: table
      height: 54px
      width: 56px
      padding: 0 12px
      line-height: 14px
      &.current
        position: relative
        z-index: 10
        margin-top: -1px
        background: #fff
        color: $green
        font-weight: 700
        .text
          border-none()
      .icon
        display: inline-block
        vertical-align: top
        width: 12px
        height: 12px
        margin-right: 2px
        background-size: 12px 12px
        background-repeat: no-repeat
      .text
        display: table-cell
        width: 56px
        vertical-align: middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: 12px
  .foods-wrapper
    flex: 1
    .title
      padding-left: 14px
      height: 26px
      line-height: 26px
      border-left: 2px solid #d9dde1
      font-size: 12px
      color: rgb(147, 153, 159)
      background: #f3f5f7
    .food-item
      display: flex
      margin: 18px
      padding-bottom: 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        margin-right: 10px
      .content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .desc, .extra
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
        .desc
          line-height: 12px
          margin-bottom: 8px
        .extra
          .count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: 14px
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147, 153, 159)
        .cartcontrol-wrapper
          position: absolute
          right: 0
          bottom: 12px
</style>
