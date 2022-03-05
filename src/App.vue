<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>

import FooterGuide from "@/components/FooterGuide/FooterGuide";
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted(){
    //this.$store.dispatch('getAddress')
    //this.$store.dispatch('getShops')
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
  .header //头部公共css
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .iconfont
        font-size 22px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 30%
      color #fff
      font-size 22px
      text-align center
</style>
