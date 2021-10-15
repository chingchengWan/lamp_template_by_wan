import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import reducer from './vuexReducer';
import user from './user';

export default createStore({
  state: {
    allPlaylist: [],
    signIn: false,
    loginUser: {},
  },
  mutations: {},
  actions: {},
  modules: {
    user,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      reducer,
    }),
  ],
});
