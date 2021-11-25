export default {
	async nuxtServerInit({ dispatch }, ctx) {
		console.log('nuxtserverinit');
		if (this.$fire.auth === null) {
			console.log(
				'nuxtServerInit Example not working - this.$fire.auth cannot be accessed.',
			);
		}

		if (ctx.$fire.auth === null) {
			console.log(
				'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.',
			);
		}

		if (ctx.app.$fire.auth === null) {
			console.log(
				'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.',
			);
		}

		// INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

		/** Get the VERIFIED authUser from the server */
		if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
			const { allClaims: claims, ...authUser } = ctx.res.locals.user;

			console.info(
				'Auth User verified on server-side. User: ',
				authUser,
				'Claims:',
				claims,
			);

			await dispatch('onAuthStateChanged', {
				authUser,
				claims,
			});
		}
	},

	async onAuthStateChanged({ commit }, { authUser, claims }) {
		console.log('actions.js onauthStageChanged');
		console.log(authUser);
		if (!authUser) {
			commit('RESET_STORE');
			this.$router.push('/');
		} else {
			await commit('SET_AUTH_USER', authUser);
			this.$router.push('/main');
		}
	},
};
