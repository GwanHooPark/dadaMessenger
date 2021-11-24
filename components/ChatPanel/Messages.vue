<template>
	<div class="h-full overflow-hidden py-4">
		<div class="h-full overflow-y-auto">
			<div class="grid grid-cols-12 gap-y-2">
				<ChatPanelMessage
					v-for="(message, index) in messages"
					:key="message.id"
					:chat="messages[index]"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			messages: [],
		};
	},
	mounted() {
		const currentChatRoom = this.$store.getters.currentChatRoom;
		if (Object.keys(currentChatRoom).length !== 0)
			this.addMessagesListener(currentChatRoom.id);
	},
	destroyed() {
		this.$fire.database.ref('messages').off();
	},
	methods: {
		addMessagesListener(chatRoomId) {
			// 메시지 추가 이벤트 리스너
			this.$fire.database
				.ref('messages')
				.child(chatRoomId)
				.on('child_added', snapshot => {
					console.log(snapshot.val());
					this.messages.push(snapshot.val());
				});
		},
		test() {
			console.log('test');
		},
	},
};
</script>

<style></style>
