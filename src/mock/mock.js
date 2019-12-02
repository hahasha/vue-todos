import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import { Todos } from './data/todoList'; //导入Todos数据

export default {
    start() { //初始化函数
        let mock = new MockAdapter(axios);  //创建MockAdapter实例
        // 获取todo列表
        mock.onGet('/todo/list').reply(config => {
            let mockTodo = Todos.map(todo => {
                return {
                    id: todo.id,
                    title: todo.title,
                    count: todo.record.filter((data) => {
                        if (data.checked === false) return true;
                        return false;
                    }).length,
                    locked: todo.locked,
                    isDelete: todo.isDelete
                };
            }).filter(todo => {
                if (todo.isDelete === true) return false;
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        todos: mockTodo
                    }])
                }, 200);
            })
        })
        // 新增一条todo
        mock.onPost('/todo/addTodo').reply(consfig => {
            Todos.push({
                id: Mock.Random.guid(),
                title: 'newList',
                isDelete: false,
                locked: false,
                record: []
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200]);
                }, 200);
            })
        })
        // 获取todo单个列表
        mock.onGet('/todo/listId').reply(config => {
            let { id } = config.params;
            let todo = Todos.find(todo => {
                return id && todo.id === id;
            });
            // console.log(todo.record);
            todo.count = todo.record.filter((data) => {
                return data.checked === false;
            }).length;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        todo: todo
                    }])
                }, 200);
            })
        })
        // 新增一条待办事项
        mock.onPost('/todo/addRecord').reply(config => {
            let { id, text } = JSON.parse(config.data);
            Todos.some((t, index) => {
                if (t.id === id) {
                    t.record.push({
                        text: text,
                        isDelete: false,
                        checked: false
                    });
                    return true;
                }
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200]);
                }, 200);
            })
        })
    }
}