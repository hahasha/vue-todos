<script>
/*
 * @Author: liusha
 * @Date:   2019-11-28 22:36:27
 * @Last Modified by:   liusha
 * @Last Modified time: 2019-12-03 21:27:38
 */
</script>
<template>
  <section class="list-todos">
    <a
      class="list-todo"
      v-for="(item,index) in todoList"
      :key="index"
      @click="changeItem(item.id)"
      :class="{active:item.id==currentId}"
    >
      <span class="icon-lock iconfont" v-if="item.locked">&#xe6e6;</span>
      {{item.title}}
      <span class="count" v-if="item.count">{{item.count}}</span>
    </a>
    <a class="add-todo" @click="addItem">
      <span class="icon-plus iconfont">&#xe636;</span>
      新增
    </a>
  </section>
</template>

<script>
import { getTodoList, addTodo } from "../api/api"; // 引入封装好的两个接口
export default {
  data() {
    return {};
  },
  computed: {
    todoList() {
      return this.$store.getters.getTodoList;
    },
    currentId: {
      get: function () {
        return this.$store.state.currentID;
      },
      set: function (val) {
        this.$store.state.currentID = val;
      }
    }
  },
  created() {
    this.$store.dispatch("getTodo").then(() => {
      this.$nextTick(() => {
        this.changeItem(this.currentId);
      });
    });
  },
  methods: {
    changeItem(itemId) {
      this.currentId = itemId;
    },
    addItem() {
      addTodo({}).then(data => {
        this.$store.dispatch("getTodo").then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              this.changeItem(this.todoList[this.todoList.length - 1].id);
            }, 100);
          });
        });
      });
    }
  },
  watch: {
    currentId: function(id) {
      this.$router.push({
        name: "todo",
        params: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.list-todos {
  width: 400px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: rgba(255, 255, 255, 0.3);
  font-size: 24px;
}

.list-todo, .add-todo {
  position: relative;
  display: block;
  width: 100%;
  padding: 18px 0 18px 66px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.add-todo {
  color: #2cc5d2;
  cursor: pointer;
}

.count {
  position: absolute;
  right: 30px;
  top: 18px;
  padding: 4px 8px;
  border-radius: 50%;
  background: hsla(0, 0%, 100%, 0.1);
  font-size: 12px;
}

.list-todo.active .count, .list-todo:hover .count {
  background: #2cc5d2;
  color: #fff;
}

.list-todo.active, .list-todo:hover {
  color: #fff;
  cursor: pointer;
}

.icon-lock, .icon-plus {
  font-size: 26px;
  position: absolute;
  top: 16px;
  left: 20px;
}

.icon-plus {
  top: 20px;
}
</style>