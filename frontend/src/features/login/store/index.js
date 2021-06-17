import axios from '../../../../node_modules/axios';

export default {
  namespaced: true,
  state: {
    email: '',
    password: '',
  },
  mutations: {
    UPDATE_EMAIL(state, payload) {
      state.email = payload;
    },
    UPDATE_PASSWORD(state, payload) {
      state.password = payload;
    },
  },
  actions: {
    updateEmail({ commit }, newEmail) {
      commit('UPDATE_EMAIL', newEmail);
    },
    updatePassword({ commit }, newPassword) {
      commit('UPDATE_PASSWORD', newPassword);
    },
    sendUserData(state) {
      axios
        .post('http://localhost:1337/auth/local', {
          identifier: state.email,
          password: state.password,
        })
        .then((response) => {
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
        })
        .catch((error) => {
          console.log('An error occurred:', error.response);
        });
    },
  },
};
