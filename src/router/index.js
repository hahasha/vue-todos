import Vue from 'vue'
import VueRouter from 'vue-router'
import Layouts from '@/components/layouts' //导入layouts组件

Vue.use(VueRouter)  //全局注册router组件

const routes = [
  {
    path: '/',
    name: 'layouts',
    component: Layouts
  }
]

const router = new VueRouter({
  routes
})

export default router
