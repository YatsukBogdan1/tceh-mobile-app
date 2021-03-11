import {UserSettings, UserState} from '../interfaces';
import {OnSettingChangeAction, SetUserDataAction} from './interfaces';

export const SET_USER_DATA = 'SET_USER_DATA';
export const ON_USER_SETTING_CHANGE = 'ON_USER_SETTING_CHANGE';

export const setUserData = (data: Partial<UserState>): SetUserDataAction => ({
	type: SET_USER_DATA,
	payload: {
		data,
	},
});

export const onSettingChange = (field: keyof UserSettings, value: string | boolean): OnSettingChangeAction => ({
	type: ON_USER_SETTING_CHANGE,
	payload: {
		field,
		value,
	},
});
