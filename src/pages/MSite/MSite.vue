<template>
  <section class="msite">
      <!--首页头部-->
      <HeaderTop :title="address.name">
        <router-link class="header_search" slot="left" to="/search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>

          <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
          <span class="header_login_text" v-if="!userInfo._id">
            登录|注册
          </span>
            <span class="header_login_text" v-else>
              <i class="iconfont icon-person"></i>
            {{userInfo.phone || userInfo.name}}
          </span>
        </router-link>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                <div class="food_container">
                  <img :src="baseImageUrl + category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>

            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination">

          </div>
        </div>
        <img src="images/msite_back.svg" alt="" v-else>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
       <ShopList/>
      </div>
    </section>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop";
import ShopList from "@/components/ShopList/ShopList";
import Swiper from "swiper"
import "swiper/css/swiper.css"

import {mapActions,mapState} from 'vuex'

export default {
  name: "MSite",
  data(){
    return{
      baseImageUrl: 'https://fuss10.elemecdn.com',
    }
  },
  components:{
    HeaderTop,
    ShopList
  },
  mounted(){

    this.getAddress()
    this.getShops()
    //this.getFoodCategorys()
    this.$store.dispatch('getFoodCategorys')

  },
  methods:{
    ...mapActions(['getAddress','getShops'])
  },
  computed:{
    ...mapState(['address','categorys','userInfo']),

    /*
    根据categorys一维数组生成一个二维数组
    小数组中的元素最多是8个
    */
    categorysArr(){
      const categorys = this.categorys
      //准备空的二维数组
      const arr = []
      //准备一个小数组，最多元素为8
      let minArr = []
      //遍历categorys
      categorys.forEach(c => {
        //如果小数组元素已经为8，则将小数组置空
        if(minArr.length === 8){
          minArr = []
        }
        //如果小数组为空，则将小数组保存到大数组中
        if(minArr.length === 0){
          arr.push(minArr)
        }
        //将当前元素放入小数组
        minArr.push(c)
      })
      return arr
    }
  },
  watch:{
    categorys(){//categorys数组中有数据了，在异步更新界面之前执行
      this.$nextTick(() => {
        this.swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        })
      })
    }
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
&.msite  //首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px

</style>
