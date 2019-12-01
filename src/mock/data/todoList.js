import Mock from 'mockjs' //导入mockjs模块
let Todos = [];
const COUNT = [1, 2, 3, 4, 5];
for (let i = 1; i <= COUNT.length; i++) {
    Todos.push(Mock.mock({   //根据数据模板生成模拟数据
        id : Mock.Random.guid(),
        title : Mock.Random.first(),
        isDelete : false,
        locked : Mock.Random.boolean(),
        record : COUNT.map(()=>{
            return {
                text : Mock.Random.cparagraph(2),
                isDelete : false,
                checked : Mock.Random.boolean()
            };
        })
    }));
}

export {
    Todos
};