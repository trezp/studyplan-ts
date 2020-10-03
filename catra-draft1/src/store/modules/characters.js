import axios from 'axios';

// initial state
const state = () => ({
  blah: "Hello",
  all: []
});

// getters
const getters = {}

// actions
const actions = {
    async getCharacters({commit}) {
        const result = await axios.get('fakeapi.json');
        commit('setCharacters', result.data);
    }
}

// mutations
const mutations = {
  setCharacters (state, data) {
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
