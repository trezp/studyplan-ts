import axios from 'axios';

// initial state
const state = () => ({
  all: []
});

// getters
const getters = {}

// actions
const actions = {
    async getCharacters({commit}:any) {
        const result = await axios.get('fakeapi.json');
        commit('setCharacters', result.data);
    }
}

// mutations
const mutations = {
  setCharacters (state:any, data:object) {
    state.all = data;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
