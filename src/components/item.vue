<template>
  <transition name="slide-fade">
    <div class="todo-item" :class="{checked:item.checked}">
      <div class="check-wrap" @click="onCheck">
        <span class="icon-check iconfont" v-if="item.checked">&#xe60b;</span>
        <span class="icon-check unchecked" v-else></span>
      </div>
      <input
        class="text"
        v-model="item.text"
        type="text"
        placeholder="write something......"
        :disabled="item.checked || item.locked"
        @keyup.enter="onChange"
      />
      <span
        class="icon-del iconfont"
        v-if="item.checked && !item.locked"
        @click="item.isDelete;onDelete()"
      >&#xe6d0;</span>
    </div>
  </transition>
</template>

<script>
import { editRecord, getTodo } from "../api/api";
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          checked: false,
          isDelete: false,
          text: "hello world!"
        };
      }
    },
    index: Number
  },
  methods: {
    update() {
      getTodo(this.$store.state.currentID);
    },
    onCheck() {
      this.item.checked = !this.item.checked;
      this.onChange();
    },
    onDelete() {
      this.item.isDelete = true;
      this.onChange();
    },
    onChange() {
      editRecord({
        id: this.$store.state.currentID,
        record: this.item,
        index: this.index
      }).then(data => {
        var othis = this;
        this.$store.dispatch("getItem", { id: this.$store.state.currentID });
        this.$store.dispatch("getTodo");
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.todo-item {
  display: flex;
  height: 60px;
  align-items: center;
  font-size: 20px;
  color: #333;
}

.check-wrap {
  flex-basis: 60px;
  height: 60px;
  position: relative;
}

.check {
  visibility: hidden;
}

.icon-check {
  position: absolute;
  left: 23px;
  top: 23px;
}

.icon-check.unchecked::after {
  content: '';
  width: 14px;
  height: 14px;
  border: 1px solid #abdfe3;
  display: block;
}

.text {
  flex: 1;
}

.icon-del {
  font-size: 30px;
  margin-right: 30px;
  cursor: pointer;
}

.todo-item.checked {
  color: #ccc;
}

.todo-item.checked .text {
  text-decoration: line-through;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

input[type=text] {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: #333;
  outline: none;
}
</style>