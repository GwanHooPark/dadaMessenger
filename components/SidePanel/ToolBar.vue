<template>
	<div
		class="
			flex flex-col
			items-center
			py-4
			flex-shrink-0
			w-20
			bg-indigo-800
			rounded-3xl
		"
	>
		<a
			href="#"
			class="
				flex
				items-center
				justify-center
				h-12
				w-12
				bg-indigo-100
				text-indigo-800
				rounded-full
			"
		>
			<img
				:src="authUser ? authUser.photoURL : ''"
				class="rounded-full border border-gray-100 shadow-sm"
			/>
		</a>
		<ul class="flex flex-col space-y-2 mt-12">
			<li>
				<a href="#" class="flex items-center">
					<span
						class="
							flex
							items-center
							justify-center
							text-indigo-100
							hover:bg-indigo-700
							h-12
							w-12
							rounded-2xl
						"
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
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							></path>
						</svg>
					</span>
				</a>
			</li>
			<li>
				<a href="#" class="flex items-center">
					<span
						class="
							flex
							items-center
							justify-center
							text-indigo-100
							hover:bg-indigo-700
							h-12
							w-12
							rounded-2xl
						"
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
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							></path>
						</svg>
					</span>
				</a>
			</li>
			<li>
				<a href="#" class="flex items-center">
					<span
						class="
							flex
							items-center
							justify-center
							text-indigo-100
							hover:bg-indigo-700
							h-12
							w-12
							rounded-2xl
						"
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
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							></path>
						</svg>
					</span>
				</a>
			</li>
			<li>
				<a href="#" class="flex items-center">
					<span
						class="
							flex
							items-center
							justify-center
							text-indigo-100
							hover:bg-indigo-700
							h-12
							w-12
							rounded-2xl
						"
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
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							></path>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							></path>
						</svg>
					</span>
				</a>
			</li>
		</ul>
		<button
			class="
				mt-auto
				flex
				items-center
				justify-center
				hover:text-indigo-100
				text-indigo-500
				h-10
				w-10
			"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				@click="logout()"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
export default {
	computed: {
		...mapState(['authUser']),
	},
	methods: {
		logout() {
			this.$fire.auth
				.signOut()
				.then(() => {
					this.$router.push('/');
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
