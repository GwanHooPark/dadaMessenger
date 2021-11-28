<template>
	<div class="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4 relative">
		<div class="flex flex-row items-center">
			<div class="flex flex-row items-center">
				<div class="text-xl font-semibold">Messages</div>
				<!-- <div
					class="
						flex
						items-center
						justify-center
						ml-2
						text-xs
						h-5
						w-5
						text-white
						bg-red-500
						rounded-full
						font-medium
					"
				>
					5
				</div> -->
			</div>
			<div class="ml-auto">
				<button
					class="
						flex
						items-center
						justify-center
						h-7
						w-7
						bg-gray-200
						text-gray-500
						rounded-full
					"
				>
					<svg
						class="w-4 h-4 stroke-current"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</button>
			</div>
		</div>
		<div class="mt-5">
			<ul class="flex flex-row items-center justify-between">
				<li @click="changeTab('Public')">
					<a
						href="#"
						class="
							flex
							items-center
							pb-3
							text-xs
							font-semibold
							relative
						"
						:class="isPublic ? 'text-indigo-800' : ''"
					>
						<span>Public Room</span>
						<span
							v-if="isPublic"
							class="
								absolute
								left-0
								bottom-0
								h-1
								w-6
								bg-indigo-800
								rounded-full
							"
						></span>
					</a>
				</li>
				<li @click="changeTab('Private')">
					<a
						href="#"
						class="
							flex
							items-center
							pb-3
							text-xs
							font-semibold
							relative
						"
						:class="!isPublic ? 'text-indigo-800' : ''"
					>
						<span>Direct Message</span>
						<span
							v-if="!isPublic"
							class="
								absolute
								left-0
								bottom-0
								h-1
								w-6
								bg-indigo-800
								rounded-full
							"
						></span>
					</a>
				</li>
				<li>
					<a
						href="#"
						class="
							flex
							items-center
							pb-3
							text-xs text-gray-700
							font-semibold
						"
					>
						<span></span>
					</a>
				</li>
			</ul>
		</div>
		<div class="mt-5">
			<div class="text-xs text-gray-400 font-semibold uppercase">
				Public Room
			</div>
		</div>
		<div
			class="
				mt-2
				h-full
				overflow-x-hidden
				relative
				h-32
				scrollbar-thin
				scrollbar-thumb-indigo-300
				scrollbar-track-indigo-100
				scrollbar-thumb-rounded-full
				scrollbar-track-rounded-full
			"
		>
			<div class="-mx-4 h-full h-64">
				<div
					v-for="(room, index) in chatRooms"
					:key="room.id"
					class="
						relative
						flex flex-row
						items-center
						p-4
						pr-8
						cursor-pointer
					"
					:class="{
						'bg-gradient-to-r': index === selectIndex,
						'from-red-100': index === selectIndex,
						'border-l-2 ': index === selectIndex,
						'to-transparent ': index === selectIndex,
						'border-red-500': index === selectIndex,
					}"
					@click="enterChatRoom(room, index)"
				>
					<!-- <div
						class="
							absolute
							text-xs text-gray-500
							right-0
							top-0
							mr-8
							mt-3
						"
					>
						5 min
					</div> -->
					<div
						class="
							flex
							items-center
							justify-center
							h-10
							w-10
							rounded-full
							text-pink-300
							font-bold
							flex-shrink-0
						"
					>
						<img
							:src="room.createdBy.image"
							class="
								rounded-full
								border border-gray-100
								shadow-sm
							"
						/>
					</div>
					<div class="flex flex-col flex-grow ml-3">
						<div class="text-sm font-medium">
							{{ room.roomName }}
						</div>
						<div class="text-xs truncate w-40">
							{{ room.description }}
						</div>
					</div>
					<!-- <div class="flex-shrink-0 ml-2 self-end mb-1">
						<span
							class="
								flex
								items-center
								justify-center
								h-5
								w-5
								bg-red-500
								text-white text-xs
								rounded-full
							"
							>5</span
						>
					</div> -->
				</div>
			</div>
		</div>
		<div class="absolute bottom-0 right-0 mr-8">
			<button
				class="
					flex
					items-center
					justify-center
					shadow-sm
					h-10
					w-10
					bg-red-500
					text-white
					rounded-full
				"
				@click="openModal()"
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					></path>
				</svg>
			</button>
		</div>
		<modal
			name="chatRoomCreateModal"
			:height="260"
			:width="320"
			@before-close="closeModal"
		>
			<div class="w-full max-w-xs">
				<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div class="mb-4">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="roomName"
						>
							방이름
						</label>
						<input
							id="roomName"
							v-model="roomName"
							class="
								shadow
								appearance-none
								border
								rounded
								w-full
								py-2
								px-3
								text-gray-700
								leading-tight
								focus:outline-none focus:shadow-outline
							"
							type="text"
							placeholder="방이름"
							@keydown.enter="createChatRoom()"
						/>
					</div>
					<div class="mb-6">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="description"
						>
							설명
						</label>
						<input
							id="description"
							v-model="description"
							class="
								shadow
								appearance-none
								border
								rounded
								w-full
								py-2
								px-3
								text-gray-700
								leading-tight
								focus:outline-none focus:shadow-outline
							"
							type="text"
							placeholder="설명"
							@keydown.enter="createChatRoom()"
						/>
					</div>
					<div class="flex items-center justify-between">
						<button
							class="
								bg-blue-500
								hover:bg-blue-700
								text-white
								font-bold
								py-2
								px-4
								rounded
								focus:outline-none focus:shadow-outline
							"
							type="button"
							@click="createChatRoom()"
						>
							만들기
						</button>
					</div>
				</form>
			</div>
		</modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			roomName: '',
			description: '',
			chatRooms: [],
			selectIndex: 0,
			isPublic: true,
		};
	},
	created() {
		// 데이터베이스 리스너 등록
		this.addChatRoomsListener();
	},
	destroyed() {
		this.$fire.database.ref('chatRooms').off();
	},
	methods: {
		changeTab(type) {
			if (type === 'Public') {
				this.isPublic = true;
			} else {
				this.isPublic = false;
			}
		},
		testLoading() {
			this.$nuxt.$loading.start();
		},
		openModal() {
			this.$modal.show('chatRoomCreateModal');
		},
		createChatRoom() {
			// 방을 생성한다.
			if (this.roomName === '') {
				alert('방이름을 입력해주세요.');
			}
			const user = this.$store.getters.currentUser;
			const chatRoomsRef = this.$fire.database.ref('chatRooms');
			const key = chatRoomsRef.push().key.replace(/-/gi, '');
			chatRoomsRef.child(key).set({
				id: key,
				roomName: this.roomName,
				description: this.description,
				createdBy: {
					name: user.displayName,
					image: user.photoURL,
				},
			});
			this.closeModal();
		},
		closeModal() {
			this.$modal.hide('chatRoomCreateModal');
			this.roomName = '';
			this.description = '';
		},
		addChatRoomsListener() {
			// 추가된 방 이벤트 수신
			this.$fire.database.ref('chatRooms').on('child_added', snapshot => {
				this.chatRooms.push(snapshot.val());
				// this.enterChatRoom(this.chatRooms[0], 0);
			});
		},
		enterChatRoom(room, index) {
			this.$store.commit('SET_CURRENT_CHAT_ROOM', room);
			this.selectIndex = index;
			// messages 컴포넌트를 갱신하기 위해 호출
			this.$store.commit('INCREATE_MESSAGES_COMPONENTKEY');
		},
	},
};
</script>

<style></style>
