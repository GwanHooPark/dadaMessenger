export default function ({ store, route, redirect }) {
	if (!store.getters.isLoggedIn && route.path !== '/login') {
		return redirect('/login');
	}
}
