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
    async init ({ dispatch }) {
      await dispatch('login')
    },

    async login({ commit }) {
      try {
        const user = await $fetch('user')
        commit('user', user)

        if (user) {
          router.replace(router.currentRoute.params.wantedRoute ||
          { name: 'home' })

          dispatch('logged-in')
        }
      } catch (e) {
        console.warn(e)
      }
    },

    logout ({ commit }) {
      commit('user', null)

      $fetch('logout')

      if (router.currentRoute.matched.some(r => r.meta.private)) {
        router.replace({ name: 'login', params: {
          wantedRoute: router.currentRoute.fullPath,
        }})
      }
    },
  }
})

export default store
