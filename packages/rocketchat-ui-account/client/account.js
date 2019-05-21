import { Tracker } from 'meteor/tracker';
import { Template } from 'meteor/templating';
import { SideNav } from 'meteor/rocketchat:ui';

Template.account.onRendered(function() {
	Tracker.afterFlush(function() {
		SideNav.setFlex('accountFlex');
		SideNav.openFlex();
	});
});
