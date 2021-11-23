import initialState from './state';

export default {
	RESET_STORE: state => {
		console.log('RESET_STORE');
		Object.assign(state, initialState());
	},

	SET_AUTH_USER: (state, authUser) => {
		state.authUser = {
			uid: authUser.uid,
			email: authUser.email,
			displayName: authUser.displayName,
			photoURL: authUser.photoURL || null,
		};
	},
};
