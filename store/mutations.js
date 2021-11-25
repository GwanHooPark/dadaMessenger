import initialState from './state';

export default {
	RESET_STORE: state => {
		console.log('RESET_STORE');
		state.authUser = null;
		state.currentChatRoom = {};
		state.messagesComponentKey = 0;
		// Object.assign(state, initialState());
	},

	SET_AUTH_USER: (state, authUser) => {
		console.log('SET_AUTH_USER');
		console.log(authUser);
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
