/* globals Package */
Package.describe({
	name: 'rocketchat:message-snippet',
	version: '0.0.1',
	summary: 'Transform your multilines messages into snippet files.',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'mongo',
		'ecmascript',
		'rocketchat:lib',
		'rocketchat:file',
		'rocketchat:markdown',
		'rocketchat:theme',
		'random',
		'tracker',
		'webapp',
		'templating',
		'kadira:flow-router',
		'kadira:blaze-layout',
	]);
	api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});
