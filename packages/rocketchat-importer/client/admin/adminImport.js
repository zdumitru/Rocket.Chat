import { Meteor } from 'meteor/meteor';
import { Importers } from 'meteor/rocketchat:importer';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { RocketChat, handleError } from 'meteor/rocketchat:lib';
import { t } from 'meteor/rocketchat:ui';

Template.adminImport.helpers({
	isAdmin() {
		return RocketChat.authz.hasRole(Meteor.userId(), 'admin');
	},
	getDescription(importer) {
		return TAPi18n.__('Importer_From_Description', { from: importer.name });
	},
	importers() {
		return Importers.getAll();
	},
});

Template.adminImport.events({
	'click .start-import'() {
		const importer = this;

		Meteor.call('setupImporter', importer.key, function(error) {
			if (error) {
				console.log(t('importer_setup_error'), importer.key, error);
				handleError(error);
				return;
			}

			FlowRouter.go(`/admin/import/prepare/${ importer.key }`);
		});
	},
});
