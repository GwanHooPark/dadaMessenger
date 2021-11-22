<template>
	<div>
		<div>로그인 페이지</div>
		<button @click="signInWithGoogle()">구글로그인</button>
	</div>
</template>

<script>
export default {
	methods: {
		async signInWithGoogle() {
			console.log('signInWithGoogle');
			console.log(this.$fire.auth);
			const provider = new this.$fireModule.auth.GoogleAuthProvider();
			const authData = await this.$fire.auth.signInWithPopup(provider);
			await this.$store.commit('SET_AUTH_USER', authData);
			this.$router.push('/profile');
		},
	},
};
</script>

<style></style>
