import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from "./router"
import store from './store'

//注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
