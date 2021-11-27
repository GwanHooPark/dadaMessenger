<template>
	<div
		v-if="Object.keys(currentChatRoom).length > 0"
		class="flex flex-row items-center"
	>
		<div
			class="
				flex flex-row
				items-center
				w-full
				border
				rounded-3xl
				h-12
				px-2
			"
		>
			<button
				class="
					flex
					items-center
					justify-center
					h-10
					w-10
					text-gray-400
					ml-1
				"
			>
				<svg
					class="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
					></path>
				</svg>
			</button>
			<div class="w-full">
				<input
					v-model="message"
					type="text"
					class="
						border border-transparent
						w-full
						focus:outline-none
						text-sm
						h-10
						flex
						items-center
					"
					placeholder="Type your message...."
					@keyup.enter="sendMessage()"
					@keydown="typingMessage()"
				/>
			</div>
			<div class="flex flex-row">
				<!-- <button
					class="
						flex
						items-center
						justify-center
						h-10
						w-8
						text-gray-400
					"
				>
					<svg
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
						></path>
					</svg>
				</button> -->
				<button
					class="
						flex
						items-center
						justify-center
						h-10
						w-8
						text-gray-400
						ml-1
						mr-2
					"
					@click="openEmoticonList()"
				>
					<!-- <svg
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg> -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="ml-6">
			<button
				class="
					flex
					items-center
					justify-center
					h-10
					w-10
					rounded-full
					bg-gray-200
					hover:bg-gray-300
					text-indigo-800 text-white
				"
				@click="sendMessage()"
			>
				<svg
					class="w-5 h-5 transform rotate-90 -mr-px"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
					></path>
				</svg>
			</button>
		</div>
		<modal name="emoticonLayer" :height="260" :width="335">
			<div class="w-full max-w-xs" style="margin: 10px">
				<span
					class="items-center h-12 w-12 cursor-pointer"
					style="display: inline-block"
				>
					<img
						:src="authUser ? authUser.photoURL : ''"
						class="rounded-2xl border border-gray-100 shadow-sm"
					/>
				</span>
				<span
					class="items-center h-12 w-12"
					style="display: inline-block"
				>
					<img
						:src="authUser ? authUser.photoURL : ''"
						class="rounded-2xl border border-gray-100 shadow-sm"
					/>
				</span>
				<span
					class="items-center h-12 w-12"
					style="display: inline-block"
				>
					<img
						:src="authUser ? authUser.photoURL : ''"
						class="rounded-2xl border border-gray-100 shadow-sm"
					/>
				</span>
				<span
					class="items-center h-12 w-12"
					style="display: inline-block"
				>
					<img
						:src="authUser ? authUser.photoURL : ''"
						class="rounded-2xl border border-gray-100 shadow-sm"
					/>
				</span>
				<span
					class="items-center h-12 w-12"
					style="display: inline-block"
				>
					<img
						:src="authUser ? authUser.photoURL : ''"
						class="rounded-2xl border border-gray-100 shadow-sm"
					/>
				</span>
				<span
					class="items-center h-12 w-12"
					style="display: inline-block"
				>
					<img
						:src="authUser ? authUser.photoURL : ''"
						class="rounded-2xl border border-gray-100 shadow-sm"
					/>
				</span>
				<span
					class="items-center h-12 w-12"
					style="display: inline-block"
				>
					<img
						:src="authUser ? authUser.photoURL : ''"
						class="rounded-2xl border border-gray-100 shadow-sm"
					/>
				</span>
			</div>
		</modal>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	data() {
		return {
			message: '',
		};
	},
	computed: {
		...mapState(['authUser', 'currentChatRoom']),
	},
	methods: {
		sendMessage() {
			const typingRef = this.$fire.database.ref('typing');
			const currentChatRoom = this.$store.getters.currentChatRoom;
			const user = this.$store.getters.currentUser;
			const messageRef = this.$fire.database.ref('messages');
			messageRef
				.child(currentChatRoom.id)
				.push()
				.set(this.makeMessageObj());

			typingRef.child(currentChatRoom.id).child(user.uid).remove();

			this.clearMessage();
		},
		makeMessageObj() {
			const user = this.$store.getters.currentUser;
			const message = {
				timestamp: this.$fireModule.database.ServerValue.TIMESTAMP,
				user: {
					id: user.uid,
					name: user.displayName,
					photoURL: user.photoURL,
				},
				content: this.message,
			};
			return message;
		},
		clearMessage() {
			this.message = '';
		},
		openEmoticonList() {
			console.log('open Emoticon list');
			this.$modal.show('emoticonLayer');
		},
		typingMessage() {
			const typingRef = this.$fire.database.ref('typing');
			const currentChatRoom = this.$store.getters.currentChatRoom;
			const user = this.$store.getters.currentUser;
			console.log('typing message');
			if (this.message) {
				typingRef
					.child(currentChatRoom.id)
					.child(user.uid)
					.set(user.displayName);
			} else {
				typingRef.child(currentChatRoom.id).child(user.uid).remove();
			}
		},
	},
};
</script>

<style></style>
