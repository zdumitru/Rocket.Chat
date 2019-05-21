// Original: https://github.com/boonex/rocket.chat/blob/master/packages/rocketchat-dolphin/package.js
Package.describe({
	name: 'rocketchat:dolphin',
	version: '0.0.2',
	summary: 'RocketChat settings for Dolphin Oauth',
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
