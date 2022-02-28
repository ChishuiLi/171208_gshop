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
