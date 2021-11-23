<template>
  <div id="app">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">{{ $route.meta.title }}</a></el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="btn">
      <el-popover placement="right" width="600" trigger="hover">
        <el-badge slot="reference" :value="totalCount" class="item">
          <el-button type="danger">我的购物车</el-button>
        </el-badge>
        <Cart />
        <el-button type="danger" @click="toCartPage">去购物车</el-button>
      </el-popover>
    </div>

    <router-view />
  </div>
</template>

<script>
import Cart from "./views/Cart"
import { mapGetters } from 'vuex'
export default {
  components: {
    Cart,
  },
  computed: {
    ...mapGetters('cart', ['totalCount'])
  },
  methods: {
    toCartPage() {
      this.$router.push('/cart')
    }
  }
};
</script>

<style>
#app {
  position: relative;
  width: 55%;
  margin: auto;
}
.btn {
  position: absolute;
  right: 50px;
  z-index: 9;
}
</style>
