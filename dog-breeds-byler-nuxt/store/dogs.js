export const strict = false;

export const state = () => ({
  breedsList: [],
});

export const mutations = {
  setBreedsList(state, list) {
    state.breedsList = list;
  },
};

export const actions = {
  setBreedsList({ dispatch, commit }, list) {
    return new Promise((resolve, reject) => {
      commit("setBreedsList", list);
      resolve(list);
    });
  },
};
