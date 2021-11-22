export default {
	onAuthStateChanged({ commit }, authUser) {
		console.log('store index.js onauthStageChanged');
		console.log(authUser);
		if (!authUser) {
			commit('RESET_STORE');
			return;
		}
		commit('SET_AUTH_USER', authUser);
	},
};
