import axios from 'axios'

const state = {
  products: []
}
const mutations = {
  setProducts(state, payload) {
    state.products = payload
  }
}
const actions = {
  async getProducts({ commit }, payload) {
    const url = 'https://www.fastmock.site/mock/3674bcb35a7e627e31f52ac85e97a9cf/vuex_cart/get_products'
    const { data } = await axios.get(url)
    console.log(data);
    // 将获取到的商品数据存储到state中
    commit('setProducts', data.data)
  }
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