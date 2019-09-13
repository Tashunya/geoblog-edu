export default {
  namespaced: true,

  state () {
    return {
      center: {
        lat: 48.8538302, // 59.9076921
        lng: 2.2982161, // 30.5341094
      },
      userPosition: null,
      zoom: 15,
    }
  },

  getters: {
    center: state => state.center,
    userPosition: state => state.userPosition,
    zoom: state => state.zoom,
  },

  mutations: {
    center (state, value) {
      state.center = value
    },
    userPosition (state, value) {
      state.userPosition = value
    },
    zoom (state, value) {
      state.zoom = value
    },
  },

  actions: {
    async centerOnUser ({ dispatch, getters }) {
      const position = getters.UserPosition
      if (position) {
        dispatch('setCenter', position)
      }
    },

    setCenter ({ commit }, value) {
      commit('center', value)
    },

    setUserPosition ({ dispatch, commit, getters }, value) {
      const position = getters.userPosition
      commit('userPosition', value)
      if (!position) {
        dispatch('centerOnUser')
      }
    },

    setZoom ({ commit }, value) {
      commit('zoom', value)
    },
  },
}
