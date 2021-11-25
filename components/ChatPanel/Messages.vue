<template>
	<div class="h-full overflow-hidden py-4">
		<div
			id="myInfiniteScroll"
			class="
				h-full
				overflow-y-auto
				h-32
				scrollbar-thin
				scrollbar-thumb-indigo-300
				scrollbar-track-indigo-100
				scrollbar-thumb-rounded-full
				scrollbar-track-rounded-full
			"
		>
			<div class="grid grid-cols-12 gap-y-2">
				<ChatPanelMessage
					v-for="(message, index) in messages"
					:key="message.id"
					:chat="messages[index]"
				/>
			</div>
			<div v-if="existTypingInfo" class="text-xs text-center">
				<div>{{ typingInfoNames }} 님이 작성중입니다...</div>
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
	computed: {
		existTypingInfo() {
			return this.$store.getters.typingInfo.length > 0;
		},
		typingInfoNames() {
			const infos = this.$store.getters.typingInfo;
			return infos.map(o => o.name).join(',');
		},
	},
	mounted() {
		const currentChatRoom = this.$store.getters.currentChatRoom;
		if (Object.keys(currentChatRoom).length !== 0) {
			this.addMessagesListener(currentChatRoom.id);
			this.addTypingListener();
			this.removeTypingListener();
		}
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
					this.scrollMoveBottom();
				});
		},
		addTypingListener() {
			const currentChatRoom = this.$store.getters.currentChatRoom;
			const user = this.$store.getters.currentUser;
			this.$fire.database
				.ref('typing')
				.child(currentChatRoom.id)
				.on('child_added', snapshot => {
					if (snapshot.key !== user.uid) {
						this.$store.commit('ADD_TYPING_INFO', {
							id: snapshot.key,
							name: snapshot.val(),
						});
						this.scrollMoveBottom();
					}
				});
		},
		removeTypingListener() {
			const currentChatRoom = this.$store.getters.currentChatRoom;
			this.$fire.database
				.ref('typing')
				.child(currentChatRoom.id)
				.on('child_removed', snapshot => {
					this.$store.commit('REMOVE_TYPING_INFO', snapshot.key);
				});
		},
		scrollMoveBottom() {
			setTimeout(() => {
				document.querySelector('#myInfiniteScroll').scrollTop =
					document.querySelector('#myInfiniteScroll').scrollHeight;
			}, 300);
		},
	},
};
</script>

<style></style>
