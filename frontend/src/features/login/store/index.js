import axios from '../../../../node_modules/axios';
import router from '../../../router';

export default {
  namespaced: true,
  state: () => ({
    email: '',
    password: '',
    username: '',
    name: '',
    surname: '',
    jwtToken: '',
    errorMessage: '',
  }),
  mutations: {
    UPDATE_EMAIL(state, payload) {
      state.email = payload;
    },
    UPDATE_PASSWORD(state, payload) {
      state.password = payload;
    },
    SET_TOKEN(state, payload) {
      state.jwtToken = payload;
    },
    SET_NAME(state, payload) {
      state.name = payload;
    },
    SET_SURNAME(state, payload) {
      state.surname = payload;
    },
    SET_USERNAME(state, payload) {
      state.username = payload;
    },
    SET_ERROR_MESSAGE(state, payload) {
      state.errorMessage = payload;
    },
  },
  actions: {
    updateEmail({ commit }, event) {
      commit('UPDATE_EMAIL', event.target.value);
    },
    updatePassword({ commit }, event) {
      commit('UPDATE_PASSWORD', event.target.value);
    },
    sendUserData({ commit, state }) {
      axios
        .post('http://localhost:1337/auth/local', {
          identifier: state.email,
          password: state.password,
        })
        .then((response) => {
          commit('SET_NAME', response.data.user.name);
          commit('SET_USERNAME', response.data.user.username);
          commit('SET_SURNAME', response.data.user.surname);
          console.log('User profile:', state.name, state.surname, state.email);
          commit('SET_TOKEN', response.data.jwt);
          console.log('User token: ', state.jwtToken);
          router.push({ path: '/' });
        })
        .catch((error) => {
          console.log('An error occurred:', error.response);
          commit('SET_ERROR_MESSAGE', 'Failed to login.');
        });
    },
  },
};
