import { Tracker } from 'meteor/tracker';

fireGlobalEvent = function _fireGlobalEvent(eventName, params) { //eslint-disable-line
	window.dispatchEvent(new CustomEvent(eventName, { detail: params }));

	Tracker.autorun((computation) => {
		const enabled = RocketChat.settings.get('Iframe_Integration_send_enable');
		if (enabled === undefined) {
			return;
		}
		computation.stop();
		if (enabled) {
			parent.postMessage({
				eventName,
				data: params,
			}, RocketChat.settings.get('Iframe_Integration_send_target_origin'));
		}
	});
};

