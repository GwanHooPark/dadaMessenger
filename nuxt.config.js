export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'dadaMessenger',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: '~/plugins/vue-js-modal.js', mode: 'client' }],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/firebase',
	],
	firebase: {
		config: {
			apiKey: 'AIzaSyDpAwAQ3binR3syONe-GA7I9OCwicFil1o',
			authDomain: 'dada-messenger.firebaseapp.com',
			databaseURL:
				'https://dada-messenger-default-rtdb.asia-southeast1.firebasedatabase.app',
			projectId: 'dada-messenger',
			storageBucket: 'dada-messenger.appspot.com',
			messagingSenderId: '212623593610',
			appId: '1:212623593610:web:6a17e002d38d0312129d73',
			measurementId: 'G-D1EF9DBN65',
		},
		services: {
			auth: {
				initialize: {
					onAuthStateChangedAction: 'onAuthStateChanged',
				},
				ssr: true,
			},
		},
	},
	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	serverMiddleware: ['~/api/index.js'],

	env: {
		firebaseApiKey:
			process.env.HEROKU_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
	},
	pwa: {
		workbox: {
			importScripts: ['/firebase-auth-sw.js'],
			// by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
			// only set this true for testing and remember to always clear your browser cache in development
			dev: process.env.NODE_ENV === 'development',
		},
	},
};
