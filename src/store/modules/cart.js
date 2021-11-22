
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
  // 删除购物车的某个商品
  removeProduct(state, index) {
    state.list.splice(index, 1)
  }

}
const actions = {

}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}