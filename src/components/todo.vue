<script>
/*
 * @Author: liusha
 * @Date:   2019-11-28 23:55:30
 * @Last Modified by:   liusha
 * @Last Modified time: 2019-11-29 16:02:01
 */
</script>
<template>
  <div class="content">
    <div class="nav-bar">
      <div class="title-wrap">
        <h1 class="title">
          {{todo.title}}
          <span class="count">{{todo.count}}</span>
        </h1>
        <div class="operate-wrap">
          <span class="icon-lock iconfont" v-if="todo.locked">&#xe6e6;</span>
          <span v-else class="icon-unlock iconfont">&#xe6e7;</span>
          <span class="icon-del iconfont">&#xe6d0;</span>
        </div>
      </div>
      <div class="input-wrap" :class="{disable:todo.locked}">
        <span class="icon-add iconfont">&#xe68a;</span>
        <!-- 监听回车事件 -->
        <input
          class="input"
          type="text"
          placeholder="请输入"
          v-model="text"
          :disabled="todo.locked"
          @keyup.enter="onAdd"
        />
      </div>
    </div>
    <div class="todo-lists">
      <div v-for="(item,index) in items" :key="index">
        <todoItem :item="item"></todoItem>
      </div>
    </div>
  </div>
</template>

<script>
import todoItem from "./item";
export default {
  data() {
    return {
      todo: {
        title: "Fiona",
        locked: false,
        count: 3
      },
      items: [
        {
          checked: false,
          text: "操作元素的 class 列表和内联样式是数据绑定的一个常见需求。",
          deleted: false
        },
        {
          checked: true,
          text: "操作元素的 class 列表和内联样式是数据绑定的一个常见需求。",
          deleted: false
        },
        {
          checked: true,
          text: "操作元素的 class 列表和内联样式是数据绑定的一个常见需求。",
          deleted: false
        }
      ],
      text: "" //新增代办事项绑定的值
    };
  },
  methods: {
    // 回车时新增一条代办事项,同时把输入框置空
    onAdd() {
      this.items.push({
        checked: false,
        text: this.text,
        deleted: false
      });
      this.text = "";
    }
  },
  components: {
    todoItem
  }
};
</script>

<style lang="stylus" scoped>
.nav-bar {
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 0 30px;
  background: linear-gradient(180deg, #d0edf5, #e1e5f0);
}

.count {
  background: #2cc5d2;
  color: #fff;
  padding: 3px 8px;
  border-radius: 50%;
  font-size: 12px;
  margin-left: 10px;
}

.title-wrap {
  box-sizing: border-box;
  padding: 20px 0;
  position: relative;
}

.operate-wrap {
  position: absolute;
  right: 0;
  top: 20px;
}

.title {
  font-size: 30px;
  color: #333;
}

.icon-lock, .icon-unlock, .icon-del {
  font-size: 34px;
}

.icon-lock, .icon-unlock {
  margin-right: 20px;
}

.input-wrap {
  color: #999;
  position: relative;
  width: 100%;
  height: 30px;
  line-height: 30px;
}

.input-wrap.disable {
  color: #ccc;
}

.input-wrap.disable .input::-webkit-input-placeholder {
  color: #ccc;
}

.icon-add {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 30px;
}

.input {
  position: absolute;
  top: 3px;
  left: 50px;
  border: none;
  font-size: 20px;
  background: none;
}

.todo-lists 
  padding-top 20px
</style>

