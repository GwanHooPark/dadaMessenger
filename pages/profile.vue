<template>
	<div>
		<div>프로필</div>
		<div>email : {{ authUser.email }}</div>
		<button @click="logout()">logout</button>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
export default {
	middleware: 'auth',
	computed: {
		...mapState(['authUser']),
	},
	methods: {
		async logout() {
			console.log('call logout');
			await this.$fire.auth.signOut();
			this.$router.push('/login');
		},
	},
};
</script>

<style></style>
