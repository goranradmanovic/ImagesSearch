import Vue from 'vue'
import Vuex from 'vuex'
import ApiImages from '@/api/images'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: null,
    isLoader: false
  },
  mutations: {
    setImages(state, data) {
      state.images = data
    },
    setLoader(state, data) {
      state.isLoader = data
    }
  },
  actions: {
    getImages({ commit }, params) {
      commit("setLoader", true)

      ApiImages.fetchAllImages(params).then((response) => {
        commit("setImages", response.data.hits)
        commit("setLoader", false)
      })
    },
    clearAllImages({ commit }) {
      commit("setImages", null)
    }
  },
  getters: {
    getAllImages(state) {
      if (state.images) {
        return state.images.slice(0, 10)
      }
    },
    getIsLoader(state) {
      return state.isLoader
    }
  },
  modules: {
  }
})
