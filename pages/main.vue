<template>
	<div>
		<div>메인화면</div>
		<button @click="googleLogin()">구글로그인</button>
	</div>
</template>
<script>
export default {
	created() {
		this.test();
	},
	methods: {
		test() {
			console.log('test call');
			console.log(process.env.firebaseApiKey);
		},
		googleLogin() {
			this.$store
				.dispatch('signInWithGoogle')
				.then(() => {
					// 로그인 팝업 창
				})
				.catch(e => {
					console.error(e.message);
				});
		},
	},
};
</script>

<style></style>
