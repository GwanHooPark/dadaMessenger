<template>
	<div>메인화면</div>
</template>
<script>
export default {
	data() {
		return {
			test444: 0,
			test2: 1,
		};
	},
	created() {
		this.test();
	},
	methods: {
		test() {
			console.log('test call');
		},
	},
};
</script>

<style></style>
