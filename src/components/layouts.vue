<script>
/*
 * @Author: liusha
 * @Date:   2019-11-28 22:36:32
 * @Last Modified by:   liusha
 * @Last Modified time: 2019-11-29 10:07:09
 */
</script>
<template>
  <section class="container">
    <menus></menus>
    <section class="content-container">
      <todo></todo>
    </section>
  </section>
</template>

<script>
import menus from "./menus";
import todo from "./todo";
export default {
  components: {
    menus,
    todo
  }
};
</script>

<style lang="stylus" scoped>
@import url('~@/common/reset.css');
@import url('~@/common/common.css');

.container {
  position: absolute;
  left: 12%;
  right: 12%;
  top: 8px;
  bottom: 8px;
}
.content-container
  position absolute
  left 400px
  right 0
  top 0
  bottom 0
  background #fff
</style>