<template>
	<div>메인화면</div>
</template>
<script>
export default {
	created() {
		this.test();
	},
	methods: {
		test() {
			console.log('test call');
			console.log(process.env);
			console.log(process.env.NODE_ENV);
			console.log(process.env.VUE_APP_TEST);
			console.log(process.env.TEST_KEY);
		},
	},
};
</script>

<style></style>
