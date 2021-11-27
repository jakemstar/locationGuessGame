module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{js,xml,html,png,ico,json,css}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};