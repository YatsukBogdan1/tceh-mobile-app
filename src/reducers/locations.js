import IMAGE_ASSETS from 'assets/images';
import { PHOTO_CATEGORIES } from 'constants/locations';
import {SINGLE_WORK_PLACE_TYPES, WORK_PLACES_CATEGORIES} from '../constants/work-places';

const initialState = {
	data: {
		park: {
			id: 'park',
			imageURI: IMAGE_ASSETS.LOCATION_1,
			name: 'Tceh Park',
			geoLocation: 'ул. Грушевского 9б, 8-9 этаж',
			square: '1500 м2',
			officesText: '50 офисов',
			accessibilityText: '24/7',
			meetingRoomText: '8 переговорных',
			loungeZoneText: '6 лаунж-зон',
			kitchenText: '2 кухни',
			subLabel: 'Офисы, где есть всё для комфортной работы',
			text: 'TCEH office space club - это комфортная работа в центре Киева, где есть максимум для продуктивности и эффективности.\n' +
				'\n' +
				'Вы можете арендовать как офисы, так и целые блоки пространства, которые могут быть адаптированы под вас.\n' +
				'\n' +
				'Команды от 2 до 100 человек смогут легко разместиться в TCEH PARK. Мы не только продумали всё в вашем офисе, но и разработали много деталей, чтобы ежедневно вы хотели возвращаться к нам!',
			gallery: [{
				name: 'Лаунж-зоны',
				description: '6 лаунж-зон, которые располагают к знакомству, общению',
				photos: [
					IMAGE_ASSETS.OFFICE_1,
					IMAGE_ASSETS.OFFICE_2,
					IMAGE_ASSETS.OFFICE_3,
					IMAGE_ASSETS.OFFICE_4,
				],
			}, {
				name: 'Кухни',
				description: '2 кухни, оборудованные необходимой посудой и бытовой техникой',
				photos: [
					IMAGE_ASSETS.OFFICE_5,
					IMAGE_ASSETS.OFFICE_6,
					IMAGE_ASSETS.OFFICE_7,
				],
			}, {
				name: 'Помещения',
				description: '8 переговорных комнат, 12 skype-комнат, 10 мягких 2-х местных мест для общения',
				photos: [
					IMAGE_ASSETS.OFFICE_8,
					IMAGE_ASSETS.OFFICE_9,
					IMAGE_ASSETS.OFFICE_10,
					IMAGE_ASSETS.OFFICE_11,
				],
			}],
			comments: [{
				user: {
					id: 'user_id_1',
					avatarURI: IMAGE_ASSETS.USER_1,
					name: 'Катерина',
				},
				timestamp: Date.now() - 1000000000,
				text: 'Работа в Tceh Park одно удовольствие! Отдельный восторг вызывают просторные лаунж-зоны и кухня. Так же удобное расположение, поблизости есть парк и развита инфраструктура.',
			}, {
				user: {
					id: 'user_id_2',
					avatarURI: IMAGE_ASSETS.USER_2,
					name: 'Валерий',
				},
				timestamp: Date.now() - 2000000000,
				text: 'Работа в Tceh Park одно удовольствие! Отдельный восторг вызывают просторные лаунж-зоны и кухня. Так же удобное расположение, поблизости есть парк и развита инфраструктура.',
			}, {
				user: {
					id: 'user_id_3',
					avatarURI: IMAGE_ASSETS.USER_3,
					name: 'Мария',
				},
				timestamp: Date.now() - 3000000000,
				text: 'Работа в Tceh Park одно удовольствие! Отдельный восторг вызывают просторные лаунж-зоны и кухня. Так же удобное расположение, поблизости есть парк и развита инфраструктура.',
			}, {
				user: {
					id: 'user_id_4',
					avatarURI: IMAGE_ASSETS.USER_3,
					name: 'Катерина',
				},
				timestamp: Date.now() - 4000000000,
				text: 'Работа в Tceh Park одно удовольствие! Отдельный восторг вызывают просторные лаунж-зоны и кухня. Так же удобное расположение, поблизости есть парк и развита инфраструктура.',
			}],
			workplaces: [{
				label: 'Офис A7',
				imageURI: IMAGE_ASSETS.OFFICE_8,
				type: WORK_PLACES_CATEGORIES.OFFICE,
				capacity: 8,
				price: 4000,
				square: 25,
				windows: true,
			}, {
				label: 'Офис A1',
				imageURI: IMAGE_ASSETS.OFFICE_9,
				type: WORK_PLACES_CATEGORIES.OFFICE,
				capacity: 10,
				price: 3000,
				square: 35,
				windows: true,
			}, {
				label: 'Офис A2',
				imageURI: IMAGE_ASSETS.OFFICE_7,
				type: WORK_PLACES_CATEGORIES.OFFICE,
				capacity: 15,
				price: 5000,
				square: 55,
				windows: true,
			}, {
				label: 'Рабочее место',
				imageURI: IMAGE_ASSETS.OFFICE_10,
				type: WORK_PLACES_CATEGORIES.SINGLE_WORK_PLACE,
				subtype: SINGLE_WORK_PLACE_TYPES.SOFA,
				price: 1500,
				windows: true,
			}, {
				label: 'Рабочее место',
				imageURI: IMAGE_ASSETS.OFFICE_10,
				type: WORK_PLACES_CATEGORIES.SINGLE_WORK_PLACE,
				subtype: SINGLE_WORK_PLACE_TYPES.TABLE,
				price: 2500,
				windows: true,
			}, {
				label: 'Рабочее место',
				imageURI: IMAGE_ASSETS.OFFICE_11,
				type: WORK_PLACES_CATEGORIES.SINGLE_WORK_PLACE,
				subtype: SINGLE_WORK_PLACE_TYPES.TABLE,
				price: 2000,
				windows: true,
			}],
		},
		podol: {
			id: 'podol',
			imageURI: IMAGE_ASSETS.LOCATION_2,
			name: 'Tceh Podol',
		},
		luk: {
			id: 'luk',
			imageURI: IMAGE_ASSETS.LOCATION_3,
			name: 'Tceh Lukyanovka',
		},
	},
	benefits: [{
		text: 'TCEH PARK - идеальное пространство\n' +
			'для работы в тихом центре Киева\n' +
			'Узнать деталиГотовые офисы класса А\n' +
			'для команд от 2 до 100\n' +
			'человек',
		imageURI: IMAGE_ASSETS.OFFICE_1,
	},{
		text: 'TCEH PARK - идеальное пространство\n' +
			'для работы в тихом центре Киева\n' +
			'Узнать деталиГотовые офисы класса А\n' +
			'для команд от 2 до 100\n' +
			'человек',
		imageURI: IMAGE_ASSETS.OFFICE_2,
	},{
		text: 'TCEH PARK - идеальное пространство\n' +
			'для работы в тихом центре Киева\n' +
			'Узнать деталиГотовые офисы класса А\n' +
			'для команд от 2 до 100\n' +
			'человек',
		imageURI: IMAGE_ASSETS.OFFICE_3,
	}],
};

const locations = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default locations;
