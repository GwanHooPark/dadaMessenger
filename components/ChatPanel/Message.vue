<template>
	<div
		class="p-3 rounded-lg"
		:class="
			isMyMessage ? 'col-start-6 col-end-13' : 'col-start-1 col-end-8'
		"
	>
		<div
			class="flex items-center"
			:class="isMyMessage ? 'justify-start flex-row-reverse' : 'flex-row'"
		>
			<div
				class="
					flex
					items-center
					justify-center
					h-10
					w-10
					rounded-full
					flex-shrink-0
				"
			>
				<img
					:src="message.user.photoURL"
					class="rounded-full border border-gray-100 shadow-sm"
				/>
			</div>
			<div
				class="relative text-sm py-2 px-4 shadow rounded-xl"
				:class="isMyMessage ? 'mr-3 bg-indigo-100' : 'ml-3 bg-white'"
			>
				<div>{{ message.content }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		chat: {
			type: Object,
			default() {
				return { content: '' };
			},
		},
	},
	data() {
		return {
			message: this.chat,
		};
	},
	computed: {
		isMyMessage() {
			const user = this.$store.getters.currentUser;
			return user.uid === this.message.user.id;
		},
	},
};
</script>

<style></style>
