export default function ({ store, redirect }) {
	console.log('middelware auth.js');
	console.log(store.getters.isLoggedIn);
	if (!store.getters.isLoggedIn) {
		console.log('redirect /');
		return redirect('/');
	}
}
