<template>
	<div>
		<div>메인화면x</div>
		<button @click="signInWithGoogle()">구글로그인</button>
		<button @click="createUser()">사용자 추가</button>
	</div>
</template>
<script>
export default {
	created() {},
	methods: {
		async signInWithGoogle() {
			console.log('signInWithGoogle');
			console.log(this.$fire.auth);
			const provider = new this.$fireModule.auth.GoogleAuthProvider();
			// You can add or remove more scopes here provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
			const authData = await this.$fire.auth.signInWithPopup(provider);
			this.$router.push('/profile');
		},
		async createUser() {
			try {
				await this.$fire.auth.createUserWithEmailAndPassword(
					'foo@foo.foo',
					'1qaz2wsx#',
				);
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>

<style></style>
