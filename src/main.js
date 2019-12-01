/*
* @Author: liusha
* @Date:   2019-11-28 23:09:39
* @Last Modified by:   liusha
* @Last Modified time: 2019-12-01 19:31:26
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mock from './mock'   
import '@/assets/iconfont.css'

Mock.start();  //执行初始化函数
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
