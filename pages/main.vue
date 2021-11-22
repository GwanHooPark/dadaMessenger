<template>
	<div class="flex flex-row h-screen antialiased text-gray-800">
		<SidePanel />
		<ChatPanel />
	</div>
</template>

<script>
export default {
	middleware: 'auth',
};
</script>

<style></style>
