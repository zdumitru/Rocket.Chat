import { Template } from 'meteor/templating';
import { RocketChat } from 'meteor/rocketchat:lib';

Template.usernameLayout.helpers({
	backgroundUrl() {
		const asset = RocketChat.settings.get('Assets_background');
		const prefix = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '';
		if (asset && (asset.url || asset.defaultUrl)) {
			return `${ prefix }/${ asset.url || asset.defaultUrl }`;
		}
	},
});
