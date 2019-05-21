Package.describe({
	name: 'rocketchat:gitlab',
	version: '0.0.1',
	summary: 'RocketChat settings for GitLab Oauth Flow',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'rocketchat:lib',
		'rocketchat:custom-oauth',
		'templating',
	]);
	api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});
