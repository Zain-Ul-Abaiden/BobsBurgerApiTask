import axios from 'axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
    user:[],
    Character:""

  },
  mutations: {
    setUser(state, payload) {
      state.user=payload;
    },
    setCharacter(state, payload){
      state.Character=payload;
    }
  },
  actions: {
   async registerUser({ commit }) {
      const response = await axios.get("https://bobsburgers-api.herokuapp.com/v2/characters/?limit=9&skip=187")
      commit('setUser',response.data)
    },
    async getByID({ commit }, id) {
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters/${id}`)
      commit('setCharacter', response.data)
    },
    async getByGender({ commit }, gender) {
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters/?gender=${gender}`)
      console.log(response)
      commit('setCharacter', response.data)
    },
    async getByHair({ commit }, hair) {
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters/?Hair=${hair}`)
      commit('setCharacter', response.data)
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getCharacter(state){
      return state.Character;
    }
  }
})