const state = {
  result: 0,
};

const getters = {
  tenResults: (state) => {
    return state.result * 10;
  },
  oneHundred: (state) => {
    return state.result * 100;
  },
};

const mutations = {
  increment(state) {
    state.result++;
  },
  decrement(state) {
    state.result--;
  },
};

const actions = {
  increment: ({ commit }) => {
    commit("increment");
  },
  asyncDecrement: ({ commit }) => {
    setTimeout(() => {
      commit("decrement");
    }, 2000);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
