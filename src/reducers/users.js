import IMAGE_ASSETS from 'assets/images';

const initialState = {
	'1': {
		id: '1',
		about: 'Комфортное помещение для проведение встреч и переговоров. Шумоизоляция позволит Вам общаться комфортно. Переговорная комната оснащена всеми необходимыми техническими средствами.',
		avatarURI: IMAGE_ASSETS.STAFF_1,
		birthday: '1996-10-08',
		companyId: '1',
		email: 'yatsukbogdan@gmail.com',
		facebookURL: 'https://url',
		instagramURL: 'https://url',
		interests: 'Комфортное помещение для проведение встреч и переговоров. Шумоизоляция позволит Вам общаться комфортно. Переговорная комната оснащена всеми необходимыми техническими средствами.',
		linkedInURL: 'https://url',
		name: 'Виталий',
		phone: '+380968246091',
		position: 'Старший юрист',
		skills: 'Комфортное помещение для проведение встреч и переговоров. Шумоизоляция позволит Вам общаться комфортно. Переговорная комната оснащена всеми необходимыми техническими средствами.',
		surname: 'Марчук',
	},
	'2': {
		id: '2',
		about: 'Что то обо мне',
		avatarURI: IMAGE_ASSETS.STAFF_2,
		birthday: '1996-10-08',
		companyId: '1',
		email: 'yatsukbogdan@gmail.com',
		facebookURL: 'https://url',
		instagramURL: 'https://url',
		interests: 'Мои интересы',
		linkedInURL: 'https://url',
		name: 'Катерина',
		phone: '+380968246091',
		position: 'Юрист',
		skills: 'Мои професиональные навыки',
		surname: 'Петренко',
	},
	'3': {
		id: '3',
		about: 'Что то обо мне',
		avatarURI: IMAGE_ASSETS.STAFF_3,
		birthday: '1996-10-08',
		companyId: '1',
		email: 'yatsukbogdan@gmail.com',
		facebookURL: 'https://url',
		instagramURL: 'https://url',
		interests: 'Мои интересы',
		linkedInURL: 'https://url',
		name: 'Валентин',
		phone: '+380968246091',
		position: 'Юрист',
		skills: 'Мои професиональные навыки',
		surname: 'Марченко',
	},
};

const users = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default users;
