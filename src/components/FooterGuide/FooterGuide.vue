<template>
  <footer class="footer_guide">

    <router-link class="item_icon iconfont icon-waimai guide_item" active-class="on" to="/msite">外卖</router-link>
    <router-link class="item_icon iconfont icon-search guide_item" active-class="on" to="/search">搜索</router-link>
    <router-link class="item_icon iconfont icon-dingdan guide_item" active-class="on" to="/order">订单</router-link>
    <router-link class="item_icon iconfont icon-geren guide_item" active-class="on" to="/profile">我的</router-link>

  </footer>
</template>

<script>
export default {
  name: "FooterGuide"
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.footer_guide  //footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
