<template>
	<main>
		<section class="absolute w-full h-full">
			<div
				class="absolute top-0 w-full h-full bg-gray-900"
				style="background-size: 100%; background-repeat: no-repeat"
				:style="{
					'background-image':
						'url(' +
						require('../assets/img/register_bg_2.png').default +
						')',
				}"
			></div>
			<div class="container mx-auto px-4 h-full">
				<div
					class="
						flex
						content-center
						items-center
						justify-center
						h-full
					"
				>
					<div class="w-full lg:w-4/12 px-4">
						<div
							class="
								relative
								flex flex-col
								min-w-0
								break-words
								w-full
								mb-6
								shadow-lg
								rounded-lg
								bg-gray-300
								border-0
							"
						>
							<div class="rounded-t mb-0 px-6 py-6">
								<div class="text-center mb-6">
									<h2 class="text-gray-600 text-lg font-bold">
										Dada-Messenger
									</h2>
								</div>
								<div class="btn-wrapper text-center">
									<button
										class="
											bg-white
											active:bg-gray-100
											text-gray-800
											font-normal
											px-4
											py-2
											rounded
											outline-none
											focus:outline-none
											mr-1
											mb-1
											uppercase
											shadow
											hover:shadow-md
											inline-flex
											items-center
											font-bold
											text-xs
										"
										type="button"
										style="transition: all 0.15s ease 0s"
										@click="signInWithGoogle()"
									>
										<img
											alt="..."
											class="w-5 mr-1"
											src="../assets/img/google.svg"
										/>Google 로 계속하기
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	methods: {
		async signInWithGoogle() {
			const provider = new this.$fireModule.auth.GoogleAuthProvider();
			const authData = await this.$fire.auth.signInWithPopup(provider);
			this.$router.push('/main');
			setTimeout(async () => {
				// console.log('authData:' + authData.email);
				// await this.$store.commit('SET_AUTH_USER', authData);
				// console.log('authData22:' + authData.email);
			}, 5000);
		},
	},
};
</script>

<style></style>
