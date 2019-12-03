import { getTodoList , getTodo as getItems } from '../api/api';

const getTodo = ({ commit }) => {
    // 调用getTodo函数时，会调用ajax请求数据的函数getTodoList，函数返回值后，再调用store.js里的EDITTODO方法，并且把值传给它
    return new Promise((resolve) => {
        getTodoList().then(res => {
            commit('EDITTODO', res.data.todos);
            resolve();
        })
    })
}


const getItem = ({ commit }, id) => {
    return new Promise((resolve) => {
        getItems(id).then(res => {
            commit('EDITItem', res.data.todo);
            resolve();
        })
    })
}

// const changeItem = ({ commit }) => {
//     return new Promise((resolve) => {
//         getTodoList().then(res => {
//             commit('CHANGEID', res.data.todos[0].id);
//             resolve();
//         })
//     })
// }

export {
    getTodo,
    getItem
    // changeItem
}

