import _ from 'underscore';
import { TAPi18n } from 'meteor/tap:i18n';

t = function(key, ...replaces) {
	if (_.isObject(replaces[0])) {
		return TAPi18n.__(key, ...replaces);
	} else {
		return TAPi18n.__(key, {
			postProcess: 'sprintf',
			sprintf: replaces,
		});
	}
};

this.tr = function(key, options, ...replaces) {
	if (_.isObject(replaces[0])) {
		return TAPi18n.__(key, options, ...replaces);
	} else {
		return TAPi18n.__(key, options, {
			postProcess: 'sprintf',
			sprintf: replaces,
		});
	}
};

isRtl = (lang) => { //eslint-disable-line
	const language = lang || localStorage.getItem('userLanguage') || 'en-US';
	return ['ar', 'dv', 'fa', 'he', 'ku', 'ps', 'sd', 'ug', 'ur', 'yi'].includes(language.split('-').shift().toLowerCase());
};
