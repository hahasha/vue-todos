<script>
/*
 * @Author: liusha
 * @Date:   2019-11-28 22:36:27
 * @Last Modified by:   liusha
 * @Last Modified time: 2019-11-29 13:19:06
 */
</script>
<template>
  <section class="list-todos">
    <a class="list-todo" v-for="item in items" :key="item.id" :class="{active:!item.locked}" >
      <span class="icon-lock iconfont" v-if="item.locked">&#xe6e6;</span>
      {{item.title}}
      <span class="count" v-if="item.count">{{item.count}}</span>
    </a>
    <a class="add-todo">
      <span class="icon-plus iconfont">&#xe636;</span>
      新增
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Fiona",
          locked: false,
          count: 3
        },
        {
          id: 2,
          title: "William",
          locked: true,
          count: 2
        },
        {
          id: 3,
          title: "Kevin",
          locked: true,
          count: 0
        },
        {
          id: 4,
          title: "Lily",
          locked: false,
          count: 1
        },
        {
          id: 5,
          title: "Scott",
          locked: true,
          count: 2
        },
        {
          id: 6,
          title: "Chales",
          locked: true,
          count: 2
        },
      ]
    };
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
  box-sizing border-box
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.add-todo
  color #2cc5d2 

.count {
  position: absolute;
  right: 30px;
  top: 18px;
  padding: 3px 8px;
  border-radius: 50%;
  background: hsla(0, 0%, 100%, 0.1);
  font-size: 12px;
}

.list-todo.active .count {
  background: #2cc5d2;
  color: #fff;
}

.list-todo.active {
  color: #fff;
}

.icon-lock, .icon-plus {
  font-size: 26px;
  position absolute
  top 16px
  left 20px
}

.icon-plus
  top 20px
</style>