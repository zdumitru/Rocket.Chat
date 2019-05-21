// Every minute check if office closed
import { Meteor } from 'meteor/meteor';

Meteor.setInterval(function() {
	if (RocketChat.settings.get('Livechat_enable_office_hours')) {
		if (RocketChat.models.LivechatOfficeHour.isOpeningTime()) {
			RocketChat.models.Users.openOffice();
		} else if (RocketChat.models.LivechatOfficeHour.isClosingTime()) {
			RocketChat.models.Users.closeOffice();
		}
	}
}, 60000);
