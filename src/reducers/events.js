import type { EventsState } from 'flow/types';
import IMAGE_ASSETS from 'assets/images';
import {
	EVENT_TYPE_MEETING_ROOM,
	EVENT_TYPE_PARTY,
} from 'constants/events';

const initialState: EventsState = {
	'1': {
		duration: 60,
		id: '1',
		imageURI: IMAGE_ASSETS.EVENT_IMAGE_1,
		label: 'Переговорная 1',
		timestamp: '2020-02-26T13:00:00Z',
		type: EVENT_TYPE_MEETING_ROOM,
	},
	'2': {
		duration: 60,
		id: '2',
		imageURI: IMAGE_ASSETS.EVENT_IMAGE_2,
		label: 'Переговорная 2',
		timestamp: '2020-02-27T14:00:00Z',
		type: EVENT_TYPE_MEETING_ROOM,
	},
	'3': {
		duration: 60,
		id: '3',
		imageURI: IMAGE_ASSETS.EVENT_IMAGE_1,
		label: 'Tceh Club Day',
		timestamp: '2020-02-27T15:00:00Z',
		type: EVENT_TYPE_PARTY,
	},
	'4': {
		duration: 60,
		id: '4',
		imageURI: IMAGE_ASSETS.EVENT_IMAGE_4,
		label: 'Переговорная 3',
		timestamp: '2020-02-27T16:00:00Z',
		type: EVENT_TYPE_MEETING_ROOM,
	},
	'5': {
		duration: 60,
		id: '5',
		imageURI: IMAGE_ASSETS.EVENT_IMAGE_5,
		label: 'Переговорная 3',
		timestamp: '2020-02-21T16:00:00Z',
		type: EVENT_TYPE_MEETING_ROOM,
	},
	'6': {
		duration: 60,
		id: '6',
		imageURI: IMAGE_ASSETS.EVENT_IMAGE_1,
		label: 'Переговорная 3',
		timestamp: '2020-03-02T16:00:00Z',
		type: EVENT_TYPE_MEETING_ROOM,
	},
};

const events = (state: EventsState = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default events;
