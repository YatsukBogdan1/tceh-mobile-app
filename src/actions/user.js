import { createActionType } from 'utils';

const USER_ACTION_PREFIX = 'USER';

export const SET_USER_DATA = createActionType(USER_ACTION_PREFIX, 'SET_USER_DATA');
export const ON_SETTING_CHANGE = createActionType(USER_ACTION_PREFIX, 'ON_SETTING_CHANGE');

export const setUserData = data => ({
	type: SET_USER_DATA,
	payload: {
		data,
	},
});

export const onSettingChange = (field, value) => ({
	type: ON_SETTING_CHANGE,
	payload: {
		field,
		value,
	},
});
