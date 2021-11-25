export default function ({ store, route, redirect }) {
	console.log('middelware auth.js');
	console.log(store.getters.isLoggedIn);
	if (!store.getters.isLoggedIn && route.path !== '/login') {
		return redirect('/login');
	}
}
