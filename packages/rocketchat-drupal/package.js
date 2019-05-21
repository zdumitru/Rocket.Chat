Package.describe({
	name: 'rocketchat:drupal',
	version: '0.0.1',
	summary: 'RocketChat settings for Drupal oAuth2',
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');
	api.use([
		'ecmascript',
		'service-configuration',
		'rocketchat:lib@0.0.1',
		'rocketchat:custom-oauth',
		'templating',
	]);
	api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});

