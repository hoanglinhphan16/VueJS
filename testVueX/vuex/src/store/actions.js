export const updateValue = ({ commit }, payload) => {
  commit("updateValue", payload);
  console.log(payload);
};
