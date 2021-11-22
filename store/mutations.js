import initialState from './state';

export default {
	RESET_STORE: state => {
		console.log('RESET_STORE');
		Object.assign(state, initialState());
	},

	SET_AUTH_USER: (state, authUser) => {
		console.log('SET_AUTH_USER');
		console.log(authUser);
		// const { uid, email, displayName, photoURL } = authUser.user;
		state.authUser = {
			uid: authUser.uid,
			email: authUser.email,
			displayName: authUser.displayName,
			photoURL: authUser.photoURL || null,
		};
	},
};
