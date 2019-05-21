Package.describe({
	name: 'rocketchat:google-vision',
	version: '0.0.1',
	summary: 'Rocket.Chat Google Vision Integration',
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
