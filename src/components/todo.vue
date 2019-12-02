<script>
/*
 * @Author: liusha
 * @Date:   2019-11-28 23:55:30
 * @Last Modified by:   liusha
 * @Last Modified time: 2019-12-02 09:08:32
 */
</script>
<template>
  <div class="content">
    <div class="nav-bar">
      <div class="title-wrap">
        <h1 class="title">
          {{todo.title}}
          <span class="count">{{todo.count || 0}}</span>
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
import { getTodo, addRecord } from "../api/api";
export default {
  data() {
    return {
      todo: {},
      items: [],
      text: "" //新增代办事项绑定的值
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const ID = this.$route.params.id;
      getTodo({ id: ID }).then(res => {
        let data = res.data.todo;
        this.items = data.record;
        this.todo = {
          id: data.id,
          title: data.title,
          count: data.count,
          locked: data.locked,
          isDelete: data.isDelete
        };
      });
    },
    // 当有输入并且回车时生成一条待办事项
    onAdd() {
      const ID = this.$route.params.id;
      addRecord({
        id: ID,
        text: this.text
      }).then(res => {
        this.text = "";
        this.init();
      });
    }
  },
  components: {
    todoItem
  },
  watch: {
    "$route.params.id": function(id) {
      this.init();
    }
  }
};
</script>

<style lang="stylus" scoped>
.nav-bar {
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 0 20px;
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

.todo-lists {
  padding-top: 20px;
}
</style>

