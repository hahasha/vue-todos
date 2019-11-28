<script>
/*
 * @Author: liusha
 * @Date:   2019-11-28 22:36:27
 * @Last Modified by:   liusha
 * @Last Modified time: 2019-11-28 23:52:46
 */
</script>
<template>
  <section class="list-todos">
    <a class="list-todo active">
      <span class="icon-lock iconfont">&#xe6e6;</span>
      Fiona
      <span class="count">1</span>
    </a>
    <a class="list-todo">
      <span class="icon-lock iconfont">&#xe6e6;</span>
      Kevin
      <span class="count">1</span>
    </a>
    <a class="list-todo">
      <span class="icon-lock iconfont">&#xe6e6;</span>
      Wiliam
      <span class="count">1</span>
    </a>
    <a class="add-todo">
      <span class="icon-plus iconfont">&#xe636;</span>
      新增
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.list-todos {
  width: 270px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.3);
}

.list-todo, .add-todo {
  position: relative;
  display: block;
  width: 100%;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.count {
  position: absolute;
  right: 14px;
  top: 18px;
  padding: 3px 6px;
  border-radius: 50%;
  background: hsla(0, 0%, 100%, 0.1);
  font-size: 12px;
}

.list-todo.active .count {
  background: #2cc5d2;
  color: #fff;
}

.list-todo.active
  color #fff

.icon-lock, .icon-plus {
  font-size: 18px;
  margin: 0 10px;
}
</style>