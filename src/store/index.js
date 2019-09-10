import Vue from 'vue'
import Vuex from 'vuex'
import { $fetch } from '../plugins/fetch'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state() {
    return {
      user: null,
    }
  },

  getters: {
    user: state => state.user,
    userPicture: () => null,
  },

  mutations: {
    user: (state, user) => {
      state.user = user
    },
  },

  actions: {
    login({ commit }) {
      const userData = {
        profile: {
          displayName: 'Mr Cat',
        },
      }
      commit('user', userData)
    },

    logout ({ commit }) {
      commit('user', null)
    },
  }
})

export default store
