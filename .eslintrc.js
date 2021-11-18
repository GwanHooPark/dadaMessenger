module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'prettier',
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'prettier/prettier': [
			'error',
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
		'no-unused-vars': 'off',
		'vue/no-use-v-if-with-v-for': [
			'error',
			{
				allowUsingIterationVar: true,
			},
		],
	},
};
