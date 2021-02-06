import { GetterTree } from 'vuex';
import { Tile } from '../models/studyplan';
import { StateInterface } from '..';

export interface StudyPlanInterface {
  tileList: Tile;
}
// initial state
const state = () => ({
  all: [],
  tileList: [
    {
      tileId: 1,
      title: 'This is a tile',
      status: '0/1',
    },
    {
      tileId: 2,
      title: 'This is a tile',
      status: '0/1',
    },
    {
      tileId: 1,
      title: 'This is a tile',
      status: '0/1',
    },
  ],
});

// getters

type Getters = {
  tiles(state: StudyPlanInterface): Tile;
};
const getters: GetterTree<StudyPlanInterface, StateInterface> & Getters = {
  tiles(state) {
    return state.tileList;
  },
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
