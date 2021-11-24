<template>
	<div class="flex flex-row h-screen antialiased text-gray-800">
		<SidePanelMain />
		<ChatPanelMain />
	</div>
</template>

<script>
export default {
	middleware: 'auth',
};
</script>

<style></style>
