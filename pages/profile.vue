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
			this.$router.push('/');
		},
	},
};
</script>

<style></style>
