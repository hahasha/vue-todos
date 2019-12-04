<script>
/*
 * @Author: liusha
 * @Date:   2019-11-28 23:55:30
 * @Last Modified by:   liusha
 * @Last Modified time: 2019-12-04 09:45:30
 */
</script>
<template>
  <div class="content">
    <div class="nav-bar">
      <!-- 点击修改时 -->
      <div class="title-wrap" v-show="isUpdate">
        <div class="todo-edit-wrap">
          <input
            class="todo-edit-input"
            type="text"
            v-model="todo.title"
            @keyup.enter="updateTitle"
            :disabled="todo.locked"
          />
          <span class="icon-cancle iconfont" @click="isUpdate = false">&#xe615;</span>
        </div>
      </div>
      <!-- 无修改时 -->
      <div class="title-wrap" v-show="!isUpdate">
        <h1 class="title" @click="isUpdate = true">
          {{todo.title}}
          <span class="count">{{todo.count || 0}}</span>
        </h1>
        <div class="operate-wrap">
          <a @click="onLock">
            <span class="icon-lock iconfont" v-if="todo.locked">&#xe6e6;</span>
            <span v-else class="icon-unlock iconfont">&#xe6e7;</span>
          </a>
          <span class="icon-del iconfont" @click="onDelete">&#xe6d0;</span>
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
        <todoItem :item="item" :index="index"></todoItem>
      </div>
    </div>
  </div>
</template>

<script>
import todoItem from "./item";
import { getTodo, addRecord, editTodo } from "../api/api";
export default {
  data() {
    return {
      // todo: {},
      // items: [],
      text: "", //新增代办事项绑定的值
      isUpdate: false
    };
  },
  computed: {
    todo: {
      get: function() {
        return this.$store.state.todoItem;
      },
      set: function(val) {
        this.$store.state.todoItem = val;
      }
    },
    items: {
      get: function() {
        return this.$store.state.todoItem.records;
      },
      set: function(val) {
        this.$store.state.todoItem.records = val;
      }
    }
  },
  create() {
    this.init();
  },
  methods: {
    init() {
      var _this = this;
      this.$store
        .dispatch("getItem", { id: this.$store.state.currentID })
        .then(() => {
          _this.todo = _this.todo;
          _this.items = _this.items;
        });

      // getTodo({ id: ID }).then(res => {
      //   let data = res.data.todo;
      //   this.items = data.records;
      //   this.todo = {
      //     id: data.id,
      //     title: data.title,
      //     count: data.count,
      //     locked: data.locked,
      //     isDelete: data.isDelete
      //   };
      // });
    },
    updateTodo() {
      let _this = this;
      editTodo({
        todo: this.todo
      }).then(data => {
        _this.$store.dispatch("getTodo");
      });
    },
    onAdd() {
      let ID = this.$route.params.id;
      addRecord({
        id: ID,
        text: this.text
      }).then(res => {
        this.text = "";
        this.init();
      });
    },
    updateTitle() {
      this.updateTodo();
      this.isUpdate = false;
    },
    onDelete() {
      this.todo.isDelete = true;
      this.updateTodo();
    },
    onLock() {
      this.todo.locked = !this.todo.locked;
      this.updateTodo();
    }
  },
  components: {
    todoItem
  },
  watch: {
    "$route.params.id": function(id) {
      this.init();
    },
    "$store.state.todoList.length": function() {
        this.$store.state.currentID = this.$store.state.todoList[0].id;
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
  cursor: pointer;
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

// 修改时
.todo-edit-wrap {
  position: relative;
}

.todo-edit-input {
  padding: 5px 0 5px 5px;
}

.icon-cancle {
  position: absolute;
  top: 6px;
  left: 200px;
  font-size: 20px;
}
</style>

