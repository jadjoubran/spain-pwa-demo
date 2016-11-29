module.exports = {
	staticFileGlobs: [
		"index.html",
		"images/**"
	],
	runtimeCaching: [{
	   urlPattern: /jsonplaceholder\.typicode\.com\/users/,
	   handler: 'fastest',
	   debug: true,
	 }]
};