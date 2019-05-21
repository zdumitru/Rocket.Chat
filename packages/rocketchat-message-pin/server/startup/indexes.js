import { Meteor } from 'meteor/meteor';
import { RocketChat } from 'meteor/rocketchat:lib';

Meteor.startup(function() {
	return Meteor.defer(function() {
		return RocketChat.models.Messages.tryEnsureIndex({
			'pinnedBy._id': 1,
		}, {
			sparse: 1,
		});
	});
});
