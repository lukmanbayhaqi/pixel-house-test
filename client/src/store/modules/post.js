import axios from 'axios'

const post = {
  state: {
    backlog: [],
    todo: [],
    onProgress: [],
    completed: [],
    loading: false
  },
  mutations: {
    SET_BACKLOG (state, payload) {
      state.backlog = payload
    },
    SET_TODO (state, payload) {
      state.todo = payload
    },
    SET_ONPROGRESS (state, payload) {
      state.onProgress = payload
    },
    SET_COMPLETED (state, payload) {
      state.completed = payload
    },
    SET_LOADING (state) {
      state.loading = !state.loading
    }
  },
  actions: {
    fetchPost ({ commit }) {
      commit('SET_LOADING')
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
          commit('SET_BACKLOG', data.slice(1, 25))
          commit('SET_TODO', data.slice(26, 50))
          commit('SET_ONPROGRESS', data.slice(51, 75))
          commit('SET_COMPLETED', data.slice(76, 100))
        })
        .catch(console.log)
        .finally(() => {
          commit('SET_LOADING')
        })
    }
  }
}

export default post
