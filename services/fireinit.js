import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyDpAwAQ3binR3syONe-GA7I9OCwicFil1o',
		authDomain: 'dada-messenger.firebaseapp.com',
		databaseURL: '',
		projectId: 'dada-messenger',
		storageBucket: 'dada-messenger.appspot.com',
		messagingSenderId: '212623593610',
		appId: '1:212623593610:web:6a17e002d38d0312129d73',
		measurementId: 'G-D1EF9DBN65',
	});
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default context => {
	const { store } = context;
	return new Promise((resolve, reject) => {
		auth.onAuthStateChanged(user => {
			if (user) {
				return resolve(store.commit('setUser', user));
			}
			return resolve(store.commit('setUser', null));
		});
	});
};
