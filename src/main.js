import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from "./router"
import store from './store'
import './fiters'  //过滤器
//import Mint from 'mint-ui'
//import 'mint-ui/lib/style.css'
//引入mint-ui的样式
//import '../node_modules/mint-ui/lib/style.css'
import './mock/mockServer' //加载mockServer即可

//Vue.use(Mint)
//注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>
//Vue.component(Icon.name,Icon) //<el-icon>

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
