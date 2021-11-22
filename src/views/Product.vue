<template>
  <div class="product">
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="goods" label="商品" width="380"> </el-table-column>
      <el-table-column prop="price" label="价格/元" width="280"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="addToCart(scope.row)" type="primary"
            >加入购物车</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: "Product",
  data() {
    return {
     
    };
  },
  computed: {
    ...mapState('products', ['products'])
  },
  methods: {
    ...mapActions('products', ['getProducts']),
    ...mapMutations('cart', ['addProduct']),
    addToCart(row) {
      const item = { ...row, count: 1}
      this.addProduct(item)
    }
  },
  created() {
    this.getProducts()
  }
};
</script>

<style scoped>
.product {
  position: relative;
  margin-top: 50px;
}

</style>