export default {
	isLoggedIn: state => {
		try {
			return state.authUser.uid !== null;
		} catch {
			return false;
		}
	},
	currentUser: state => {
		return state.authUser;
	},
	currentChatRoom: state => {
		return state.currentChatRoom;
	},
	messagesComponentKey: state => {
		return state.messagesComponentKey;
	},
};
