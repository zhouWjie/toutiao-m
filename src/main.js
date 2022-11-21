import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.less'
// 引入vant组件库
import Vant from 'vant'
// 引入vant样式表
import 'vant/lib/index.css'

// 全局注册vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
