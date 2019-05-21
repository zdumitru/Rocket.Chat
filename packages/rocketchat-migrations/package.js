Package.describe({
	name: 'rocketchat:migrations',
	version: '0.0.1',
	summary: '',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'rocketchat:lib',
		'rocketchat:version',
		'logging',
		'check',
		'mongo',
	]);
	api.mainModule('server/index.js', 'server');
});
