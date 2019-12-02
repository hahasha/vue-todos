/*
* @Author: liusha
* @Date:   2019-11-28 23:09:39
* @Last Modified by:   liusha
* @Last Modified time: 2019-12-02 17:13:06
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mock from './mock'   
import store from './vuex/store' 
import '@/assets/iconfont.css'

Mock.start();  //执行初始化函数
Vue.config.productionTip = false

new Vue({
  router,
  store,  //注入vuex实例
  render: h => h(App)
}).$mount('#app')
