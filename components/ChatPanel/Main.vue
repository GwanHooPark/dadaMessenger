<template>
	<div class="flex flex-col h-full w-full bg-white px-4 py-6">
		<ChatPanelRoomInfo v-if="isChatRoomSelect" />
		<ChatPanelMessages :key="messagesComponentKey" />
		<ChatPanelMessageInput v-if="isChatRoomSelect" />
		<ChatPanelEmptyMessages v-if="!isChatRoomSelect" />
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	computed: {
		...mapState(['messagesComponentKey']),
		isChatRoomSelect() {
			const currentChatRoom = this.$store.getters.currentChatRoom;
			return Object.keys(currentChatRoom).length > 0;
		},
	},
};
</script>

<style></style>
