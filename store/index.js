import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js';
Vue.use(Vuex);
export default new Store({
	state: {
		user: '',
	},
	mutations: {
		setUser(state, data) {
			state.user = data;
		},
	},
	getters: {
		getUser: (state, getters) => {
			return state.user;
		},
	},
	actions: {
		signInWithGoogle({ commit }) {
			return new Promise((resolve, reject) => {
				auth.signInWithPopup(GoogleProvider);
				resolve();
			});
		},
		signOut({ commit }) {
			auth.signOut()
				.then(() => {
					commit('setUser', null);
				})
				.catch(error => console.error(error));
		},
	},
});
