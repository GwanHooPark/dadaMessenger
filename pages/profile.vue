<template>
	<div>
		<div>프로필</div>
		<div>
			이름 : <img :src="authUser.photoURL" />
			{{ authUser.displayName }}
		</div>
		<div>email : {{ authUser.email }}</div>
		<button @click="logout()">logout</button>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	middleware: 'auth',
	computed: {
		...mapState(['authUser']),
	},
	methods: {
		async logout() {
			await this.$fire.auth.signOut();
			this.$router.push('/');
		},
	},
};
</script>

<style></style>
