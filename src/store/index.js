import axios from 'axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
    user:[]
  },
  mutations: {
    setUser(state, payload) {
      state.user=payload
    }
  },
  actions: {
   async registerUser({ commit }) {
      const response = await axios.get("https://bobsburgers-api.herokuapp.com/v2/characters/?limit=9&skip=187")
      commit('setUser',response.data)
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
})