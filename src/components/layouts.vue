<template>
  <section class="container">
    <menus></menus>
    <section class="content-container"></section>
  </section>
</template>

<script>
import menus from './menus'
export default {
    components : {
        menus  
    }
};
</script>

<style lang="stylus" scoped>
@import url('~@/common/reset.css');
@import url('~@/common/common.css');
.container
    box-sizing border-box
    width 100%
    height 100%
    padding 8px 10%

</style>