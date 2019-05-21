Package.describe({
	name: 'rocketchat:issuelinks',
	version: '0.0.1',
	summary: 'Message pre-processor that adds links to issue numbers.',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'rocketchat:lib',
	]);
	api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});
