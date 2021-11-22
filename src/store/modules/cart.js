
const state = {
  list: []
}
const mutations = {
  // 添加商品进购物车
  addProduct(state, productItem) {
    // 先查看购物车是否存在当前商品的数据
    const target = state.list.find(item => item.id === productItem.id)
    if (target) {
      // 已存在该商品直接count + 1
      target.count += 1
    } else {
      // 不存在直接push
      state.list.push(productItem)
    }
  },
  // 修改商品数量
  modifyProductCount(state, productItem) {
    const target = state.list.find(item => item.id === productItem.id)
    // 找到对应商品更新其count值
    target && (target.count = productItem.count)
  },
  // 删除购物车的某个商品
  removeProduct(state, id) {
    const index = state.list.findIndex(item => item.id === id)
    index !== -1 && state.list.splice(index, 1)
  }

}
const actions = {

}

const getters = {
  // 计算购物车商品总数量
  totalCount(state) {
    const total = state.list.reduce((prev, curr) => {
      return prev + curr.count
    }, 0)
    return total
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}