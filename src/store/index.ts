import { createStore } from 'vuex';

import studyplan, { StudyPlanInterface } from './modules/studyplan';

export interface StateInterface {
  studyplan: StudyPlanInterface;
}
export default createStore({
  modules: {
    studyplan,
  },
});
