<template>
	<main>
		<section class="absolute w-full h-full">
			<div
				class="absolute top-0 w-full h-full bg-gray-900"
				style="
					background-size: 100%;
					background-repeat: no-repeat;
					background-image: url('../assets/img/register_bg_2.png');
				"
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
										/>Google
									</button>
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
										@click="signInWithGitHub()"
									>
										<img
											alt="..."
											class="w-5 mr-1"
											src="../assets/img/github.svg"
										/>GitHub
									</button>
									<button @click="reset()">reset</button>
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
	created() {
		if (this.$store.getters.isLoggedIn) {
			this.$router.push('/main');
		}
	},
	methods: {
		async signInWithGoogle() {
			const provider = new this.$fireModule.auth.GoogleAuthProvider();
			const authData = await this.$fire.auth
				.signInWithPopup(provider)
				.then(result => {
					console.log('result');
					this.$router.push('/main');
					console.log('result2');
				});
		},
		async signInWithGitHub() {
			const provider = new this.$fireModule.auth.GithubAuthProvider();
			const authData = await this.$fire.auth
				.signInWithPopup(provider)
				.then(result => {
					console.log('result');
					const user = result.user;
					console.log(user);
					this.$router.push('/main');
				});
		},
		reset() {
			console.log('reest');
			this.$store.commit('RESET_STORE');
		},
	},
};
</script>

<style></style>
