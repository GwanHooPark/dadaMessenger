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
	router: {
		middleware: 'auth',
	},
	firebase: {
		config: {
			apiKey:
				process.env.HEROKU_FIREBASE_API_KEY ||
				process.env.FIREBASE_API_KEY,
			authDomain:
				process.env.HEROKU_FIREBASE_AUTH_DOMAIN ||
				process.env.FIREBASE_AUTH_DOMAIN,
			databaseURL:
				process.env.HEROKU_FIREBASE_DATABASE_URL ||
				process.env.FIREBASE_DATABASE_URL,
			projectId:
				process.env.HEROKU_FIREBASE_PROJECT_ID ||
				process.env.FIREBASE_PROJECT_ID,
			storageBucket:
				process.env.HEROKU_FIREBASE_STORAGE_BUCKET ||
				process.env.FIREBASE_STORAGE_BUCKET,
			messagingSenderId:
				process.env.HEROKU_FIREBASE_MESSAGING_SENDER_ID ||
				process.env.FIREBASE_MESSAGING_SENDER_ID,
			appId:
				process.env.HEROKU_FIREBASE_APP_ID ||
				process.env.FIREBASE_APP_ID,
			measurementId:
				process.env.HEROKU_FIREBASE_MEASUREMENT_ID ||
				process.env.FIREBASE_MEASUREMENT_ID,
		},
		services: {
			auth: {
				initialize: {
					onAuthStateChangedAction: 'onAuthStateChanged',
				},
				ssr: true,
			},
			database: true,
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
