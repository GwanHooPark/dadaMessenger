<template>
	<div class="flex flex-col h-full w-full bg-white px-4 py-6">
		<ChatPanelRoomInfo />
		<ChatPanelMessages :key="messagesComponentKey" />
		<ChatPanelMessageInput />
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	computed: {
		...mapState(['messagesComponentKey']),
	},
};
</script>

<style></style>
