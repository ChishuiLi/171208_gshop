##Git报错：OpenSSL SSL_read: Connection was reset, errno 10054
git config --global http.sslVerify "false"

#VUE在2022年2月7日默认版本已经更新到vue3，随之vue-router和vuex版本也发生了变化，在vue2中之恶能使用3版本的vue-router和vuex
#vue-router
2022年2月7日后vue-router默认版本改为4，4版本只能再vue3中使用，在vue2中使用vue3
安装命令
npm i vue-router@3

vue2中stylus-loader版本为3
安装命令
npm i stylus-loader@3

swiper轮播图不显示小圆点
先卸载了swiper，安装swiper@5.4.5，引用时出现了css/swiper.in.css,但是运行时报错，然后卸载swiper@5.4.5，
再执行npm i swiper，安装好后运行，就能出现小圆点。。。可能再原先基础上停掉项目再运行也行。或者是引用的css路径不对

#vuex
npm i vuex@3

#const和let
const声明只读变量，不能修改
let声明的变量只在let的代码块中有效

#引入miti-ui
引入时将"es2015"改为"@babel/preset-env"
"plugins": [["component", [//去掉此处的[]，即可正常运行
{
"libraryName": "mint-ui",
"style": true
}
]]]
#点击回车提交表单
在<from>标签中添加 @keydown.enter="login"

在写ShopGoods组件时，界面列表总是会有边距，导致div中内容超出边距，经排查发现时ul标签自带有默认填充和默认边距
在ul标签上加上样式  style="margin:0px;padding: 0px" 
li标签去掉小圆点 style="list-style: none"

在vuex中触发actions方法调用
1. mounted(){this.$store.dispatch('方法名')}

2.import {mapActions} from 'vuex'
   methods:{
        ...mapActions(['方法名'])
    },
   mounted(){
        this.方法名()    
    }

Array.prototype.slice.call (arguments)能将具有length属性的对象转成数组

在已经有数据绑定的数据中添加新的数据，用Vue.set(对象,'属性名',数据)

实现滑动使用了第三方库 better-scroll
