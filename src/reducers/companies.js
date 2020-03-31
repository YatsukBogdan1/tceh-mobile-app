import {
	ON_SETTING_CHANGE,
	SET_USER_DATA,
} from 'actions/user';
import IMAGE_ASSETS from 'assets/images';

const initialState = {
	'1': {
		address: 'Parkova St.2',
		avatarURI: IMAGE_ASSETS.APPSIDER_LOGO,
		backgroundURI: IMAGE_ASSETS.COMPANY_BACKGROUND,
		description: 'Appsider company description',
		fullDescription: 'Evris - юридическая фирма, находится в Киеве, чья команда известна на рынке своей высокой эффективностью, когда речь идет о сложных юридические вопросы.\n' +
			'\n' +
			'Мы начали работу в 2015 году небольшой группой профессиональных юристов с опытом работы в компаниях Большой четверки, которые специализировались на масштабных проектах в украинских и международных судебных процессах.',
		email: 'info@appsider.net',
		facebookURL: 'https://url',
		id: '1',
		industryId: 'mobile_apps',
		instagramURL: 'https://url',
		label: 'Appsider',
		linkedInURL: 'https://url',
		locationId: 'park',
		office: 'A2',
		phone: '+380671111111',
		website: 'www.appsider.com',
		staff: ['1', '2', '3'],
		photos: [
			IMAGE_ASSETS.OFFICE_1,
			IMAGE_ASSETS.OFFICE_2,
			IMAGE_ASSETS.OFFICE_3,
			IMAGE_ASSETS.OFFICE_4,
			IMAGE_ASSETS.OFFICE_5,
			IMAGE_ASSETS.OFFICE_6,
			IMAGE_ASSETS.OFFICE_7,
			IMAGE_ASSETS.OFFICE_8,
		],
	},
	'2': {
		address: 'Parkova St.2',
		avatarURI: IMAGE_ASSETS.APPSIDER_LOGO,
		backgroundURI: IMAGE_ASSETS.COMPANY_BACKGROUND,
		description: 'Evris company description',
		fullDescription: 'Evris - юридическая фирма, находится в Киеве, чья команда известна на рынке своей высокой эффективностью, когда речь идет о сложных юридические вопросы.\n' +
			'\n' +
			'Мы начали работу в 2015 году небольшой группой профессиональных юристов с опытом работы в компаниях Большой четверки, которые специализировались на масштабных проектах в украинских и международных судебных процессах.',
		email: 'info@evris.net',
		facebookURL: 'https://url',
		id: '2',
		industryId: 'law_company',
		instagramURL: 'https://url',
		label: 'Evris',
		linkedInURL: 'https://url',
		locationId: 'park',
		office: 'A3',
		phone: '+380671111111',
		website: 'www.appsider.com',
		staff: [],
		photos: [
			IMAGE_ASSETS.OFFICE_1,
			IMAGE_ASSETS.OFFICE_2,
			IMAGE_ASSETS.OFFICE_3,
			IMAGE_ASSETS.OFFICE_4,
			IMAGE_ASSETS.OFFICE_5,
			IMAGE_ASSETS.OFFICE_6,
			IMAGE_ASSETS.OFFICE_7,
			IMAGE_ASSETS.OFFICE_8,
		],
	},
	'3': {
		address: 'Parkova St.2',
		avatarURI: IMAGE_ASSETS.APPSIDER_LOGO,
		backgroundURI: IMAGE_ASSETS.COMPANY_BACKGROUND,
		description: 'Better Call Saul',
		fullDescription: 'Evris - юридическая фирма, находится в Киеве, чья команда известна на рынке своей высокой эффективностью, когда речь идет о сложных юридические вопросы.\n' +
			'\n' +
			'Мы начали работу в 2015 году небольшой группой профессиональных юристов с опытом работы в компаниях Большой четверки, которые специализировались на масштабных проектах в украинских и международных судебных процессах.',
		email: 'info@saulgoodman.net',
		facebookURL: 'https://url',
		id: '3',
		industryId: 'law_company',
		instagramURL: 'https://url',
		label: 'Saul Goodman Inc.',
		linkedInURL: 'https://url',
		locationId: 'park',
		office: 'A4',
		phone: '+380671111111',
		website: 'www.appsider.com',
		staff: [],
		photos: [
			IMAGE_ASSETS.OFFICE_1,
			IMAGE_ASSETS.OFFICE_2,
			IMAGE_ASSETS.OFFICE_3,
			IMAGE_ASSETS.OFFICE_4,
			IMAGE_ASSETS.OFFICE_5,
			IMAGE_ASSETS.OFFICE_6,
			IMAGE_ASSETS.OFFICE_7,
			IMAGE_ASSETS.OFFICE_8,
		],
	},
};

const companies = (state: UserState = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload.data,
			};
		case ON_SETTING_CHANGE:
			return {
				...state,
				settings: {
					...state.settings,
					[action.payload.field]: action.payload.value,
				},
			};
		default:
			return state;
	}
};

export default companies;
