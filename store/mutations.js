import initialState from './state';

export default {
	RESET_STORE: state => {
		state.authUser = null;
		state.currentChatRoom = {};
		state.messagesComponentKey = 0;
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

	ADD_TYPING_INFO: (state, typingInfo) => {
		state.typingInfo.push({
			id: typingInfo.id,
			name: typingInfo.name,
		});
	},
	REMOVE_TYPING_INFO: (state, typingInfoKey) => {
		const idx = state.typingInfo.findIndex(info => {
			return info.id === typingInfoKey;
		});
		state.typingInfo.splice(idx, 1);
	},
};
