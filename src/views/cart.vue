<template>
  <div class="cart">
    <el-table :data="list">
      <el-table-column prop="goods" label="商品" > </el-table-column>
      <el-table-column prop="price" label="价格/元" width="100"> </el-table-column>
      <el-table-column label="数量">
        <template slot-scope="scope">
           <el-input-number v-model="scope.row.count" @change="handleChange(scope.row)" size="mini" :min="1" label="商品数量"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="removeItem(scope.row.id)" type="danger" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Cart',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('cart', ['list'])
  },
  methods: {
    ...mapMutations('cart', ['modifyProductCount', 'removeProduct']),
    handleChange(product) {
      this.modifyProductCount(product)
    },
    removeItem(id) {
      this.removeProduct(id)
    }
  }
}
</script>
