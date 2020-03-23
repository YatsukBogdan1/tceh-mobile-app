import { SET_FILTER } from 'actions/meeting-rooms';
import IMAGE_ASSETS from 'assets/images';
import { MEETING_ROOMS_CATEGORIES } from 'constants/meeting-rooms';

const initialState = {
	filters: {
		capacity: 10,
		date: new Date().setMinutes(0, 0, 0),
		duration: 60,
		desk: false,
		flipchart: false,
		locationId: 'park',
		projector: false,
		screen: false,
		type: MEETING_ROOMS_CATEGORIES.MEETING_ROOM,
	},
	data: {
		'1': {
			capacity: 8,
			id: '1',
			imageURI: IMAGE_ASSETS.OFFICE_1,
			label: 'Переговорная комната №1',
			location: 'Tceh Park, Блок D',
			locationId: 'park',
			description: 'Комфортное помещение для проведение встреч и переговоров. Шумоизоляция позволит Вам общаться комфортно. Офис оснащен всеми необходимыми техническими средствами, возможна доукомплектация.',
			type: MEETING_ROOMS_CATEGORIES.OFFICE,
			desk: false,
			flipchart: true,
			projector: false,
			screen: false,
			photos: [
				IMAGE_ASSETS.OFFICE_1,
				IMAGE_ASSETS.OFFICE_2,
				IMAGE_ASSETS.OFFICE_3,
			],
		},
		'2':{
			capacity: 12,
			id: '2',
			imageURI: IMAGE_ASSETS.OFFICE_2,
			label: 'Переговорная комната №2',
			location: 'Tceh Park, Блок D',
			locationId: 'park',
			description: 'Комфортное помещение для проведение встреч и переговоров. Шумоизоляция позволит Вам общаться комфортно. Офис оснащен всеми необходимыми техническими средствами, возможна доукомплектация.',
			type: MEETING_ROOMS_CATEGORIES.OFFICE,
			desk: false,
			flipchart: true,
			projector: false,
			screen: true,
			photos: [
				IMAGE_ASSETS.OFFICE_1,
				IMAGE_ASSETS.OFFICE_2,
				IMAGE_ASSETS.OFFICE_3,
			],
		},
		'3': {
			capacity: 1,
			id: '3',
			imageURI: IMAGE_ASSETS.OFFICE_3,
			label: 'Skype комната №1',
			location: 'Tceh Park, Блок D',
			locationId: 'park',
			description: 'Комфортное помещение для проведение встреч и переговоров. Шумоизоляция позволит Вам общаться комфортно. Офис оснащен всеми необходимыми техническими средствами, возможна доукомплектация.',
			type: MEETING_ROOMS_CATEGORIES.SKYPE_ROOM,
			desk: false,
			flipchart: false,
			projector: false,
			screen: false,
			photos: [
				IMAGE_ASSETS.OFFICE_1,
				IMAGE_ASSETS.OFFICE_2,
				IMAGE_ASSETS.OFFICE_3,
			],
		},
		'4': {
			capacity: 4,
			id: '4',
			imageURI: IMAGE_ASSETS.OFFICE_4,
			label: 'Переговорная комната №3',
			location: 'Tceh Park, Блок D',
			locationId: 'park',
			description: 'Комфортное помещение для проведение встреч и переговоров. Шумоизоляция позволит Вам общаться комфортно. Офис оснащен всеми необходимыми техническими средствами, возможна доукомплектация.',
			type: MEETING_ROOMS_CATEGORIES.OFFICE,
			desk: true,
			flipchart: true,
			projector: true,
			screen: true,
			photos: [
				IMAGE_ASSETS.OFFICE_1,
				IMAGE_ASSETS.OFFICE_2,
				IMAGE_ASSETS.OFFICE_3,
			],
		},
	},
};

const meetingRooms = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER:
			return {
				...state,
				filters: {
					...state.filters,
					[action.payload.field]: action.payload.value,
				},
			};
		default:
			return state;
	}
};

export default meetingRooms;
