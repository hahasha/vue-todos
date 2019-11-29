<template>
  <div class="todo-item" :class="{checked:item.checked}">
    <div class="check-wrap">
      <input class="check" type="checkbox" v-model="item.checked" />
      <span class="icon-check iconfont" v-if="item.checked">&#xe60b;</span>
      <span class="icon-check unchecked" v-else></span>
    </div>
    <p class="text">{{item.text}}</p>
    <span class="icon-del iconfont" v-if="item.checked">&#xe6d0;</span>
  </div>
</template>

<script>
export default {
  props: ["item"]
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
}

.todo-item.checked {
  color: #ccc;
}

.todo-item.checked .text {
  text-decoration: line-through;
}
</style>