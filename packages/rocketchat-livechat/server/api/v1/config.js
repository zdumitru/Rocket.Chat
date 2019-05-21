import { findGuest, settings, online, findOpenRoom } from '../lib/livechat';
import { Match, check } from 'meteor/check';

RocketChat.API.v1.addRoute('livechat/config', {
	get() {
		try {
			check(this.queryParams, {
				token: Match.Maybe(String),
			});

			const config = settings();
			if (!config.enabled) {
				return RocketChat.API.v1.success({ config: { enabled: false } });
			}

			const status = online();

			let guest;
			let room;
			let agent;

			const { token } = this.queryParams;

			if (token) {
				guest = findGuest(token);
				room = findOpenRoom(token);
				agent = room && room.servedBy && RocketChat.models.Users.getAgentInfo(room.servedBy._id);
			}

			Object.assign(config, { online: status, guest, room, agent });

			return RocketChat.API.v1.success({ config });
		} catch (e) {
			return RocketChat.API.v1.failure(e);
		}
	},
});
