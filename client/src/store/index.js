import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post.js'
import modal from './modules/modal.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    modal
  }
})
