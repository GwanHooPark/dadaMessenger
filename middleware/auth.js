export default function ({ store, redirect }) {
	console.log('auth.js');
	console.log(store.getters.isLoggedIn);
	if (!store.getters.isLoggedIn) {
		return redirect('/login');
	}
}
