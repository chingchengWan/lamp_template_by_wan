const defaultState = {
  darkMode: false,
};

const mutations = {
  SET_DARK_MODE(state, status) {
    state.darkMode = status;
  },
};

const actions = {
  setDarkMode(context, status) {
    context.commit('SET_DARK_MODE', status);
  },
};

export default {
  state: defaultState,
  actions,
  mutations,
  namespaced: true,
};
