import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex); 

// 创建初始应用全局状态变量
const state = {
    todoList : [] //代办事项列表数据
} 

// 定义所需的mutations
const mutations = {
    EDITTODO(state,data){ //定义名为EDITTODO的函数用于改变todoList的值
        this.todoList = data;
    }
}

// 创建store实例并导出
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
});