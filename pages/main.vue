<template>
	<div>
		<div>메인화면</div>
		<button @click="test()">버튼1</button>
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
			console.log(process.env.NODE_ENV);
			console.log(process.env.TEST_KEY);
			console.log(process.env.VUE_APP_TEST);
			console.log(process.env.testUrl);
		},
	},
};
</script>

<style></style>
