Package.describe({
	name: 'rocketchat:autotranslate',
	version: '0.0.1',
	summary: 'Rocket.Chat automatic translations',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'ddp-rate-limiter',
		'rocketchat:lib',
		'templating',
	]);
	api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});
