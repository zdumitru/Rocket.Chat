Package.describe({
	name: 'rocketchat:integrations',
	version: '0.0.1',
	summary: 'Integrations with services and WebHooks',
	git: '',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'mongo',
		'babel-compiler',
		'rocketchat:lib',
		'rocketchat:authorization',
		'rocketchat:theme',
		'rocketchat:logger',
		'kadira:flow-router',
		'kadira:blaze-layout',
		'nimble:restivus',
		'templating',
	]);
	api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});
