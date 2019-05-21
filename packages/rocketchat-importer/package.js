Package.describe({
	name: 'rocketchat:importer',
	version: '0.0.1',
	summary: 'RocketChat importer library',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'templating',
		'check',
		'rocketchat:lib',
		'rocketchat:logger',
	]);
	api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});
