import { TEMPLATE_ACTION } from 'actions';

const initialState = {};

const instance = (state = initialState, action) => {
	switch (action.type) {
		case TEMPLATE_ACTION:
			return state;
		default:
			return state;
	}
};

export default instance;
