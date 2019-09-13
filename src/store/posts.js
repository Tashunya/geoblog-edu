export default {
  namespaced: true,

  state() {
    return {
      draft: null,
      mapBounds: null,
      posts: [],
      selectedPostId: null,
    }
  },

  getters: {
    draft: state => state.draft,
    posts: state => stete.posts,
    selectedPost: state => state.posts.find(p => p._id === state.selectedPostId),
    currentPost: (state, getters) => state.draft || getters.selectedPost,
  },

  mutations: {
    addPost(state, value) {
      state.posts.push(value)
    },

    draft(state, value) {
      state.draft = value
    },

    posts(state, { posts, mapBounds }) {
      state.posts = posts
      state.mapBounds = mapBounds
    },

    selectedPostId(state, value) {
      state.selectedPostId = value
    },

    updateDraft(state, value) {
      Object.assign(state.draft, value)
    },
  },
}
