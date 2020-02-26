import { createActionType } from 'utils';

const USER_ACTION_PREFIX = 'USER';

export const SET_USER_DATA = createActionType(USER_ACTION_PREFIX, 'SET_USER_DATA');

export const setUserData = data => ({
	type: SET_USER_DATA,
	payload: {
		data,
	},
});
