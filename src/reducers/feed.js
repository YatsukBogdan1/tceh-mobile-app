import IMAGE_ASSETS from 'assets/images';

const initialState = [{
	id: '1',
	author: {
		avatarURI: IMAGE_ASSETS.USER_1,
		name: 'Tceh',
	},
	timestamp: 1576120341700,
	text: 'Дорогие друзья, oтправляем вам фотоотчет с нашего club day и хотели бы сказать спасибо за то, что вы пришли, отдыхали, знакоми, Дорогие друзья, oтправляем вам фотоотчет с нашего club day и хотели бы сказать спасибо за то, что вы пришли, отдыхали, знакоми, Дорогие друзья, oтправляем вам фотоотчет с нашего club day и хотели бы сказать спасибо за то, что вы пришли, отдыхали, знакоми',

}];

const instance = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default instance;
