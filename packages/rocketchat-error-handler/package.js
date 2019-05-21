Package.describe({
	name: 'rocketchat:error-handler',
	version: '1.0.0',
	summary: 'Rocket.Chat Error Handler',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'rocketchat:lib',
		'templating',
	]);

	api.mainModule('server/index.js', 'server');
});
