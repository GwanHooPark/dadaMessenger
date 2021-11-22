import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDpAwAQ3binR3syONe-GA7I9OCwicFil1o',
	authDomain: 'dada-messenger.firebaseapp.com',
	databaseURL: '',
	projectId: 'dada-messenger',
	storageBucket: 'dada-messenger.appspot.com',
	messagingSenderId: '212623593610',
	appId: '1:212623593610:web:6a17e002d38d0312129d73',
	measurementId: 'G-D1EF9DBN65',
};

let app = null;
if (!firebase.apps.length) {
	app = firebase.initializeApp(firebaseConfig);
}

export const db = app.database();
