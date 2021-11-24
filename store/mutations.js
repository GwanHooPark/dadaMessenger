import initialState from './state';

export default {
	RESET_STORE: state => {
		console.log('RESET_STORE');
		state.authUser = null;
		// Object.assign(state, initialState());
	},

	SET_AUTH_USER: (state, authUser) => {
		state.authUser = {
			uid: authUser.uid,
			email: authUser.email,
			displayName: authUser.displayName,
			photoURL: authUser.photoURL || null,
		};
	},

	SET_CURRENT_CHAT_ROOM: (state, room) => {
		state.currentChatRoom = room;
	},

	INCREATE_MESSAGES_COMPONENTKEY: state => {
		state.messagesComponentKey++;
	},
};
