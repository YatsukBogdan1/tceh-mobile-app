import { createActionType } from 'utils';

const MEETING_ROOMS_ACTION_PREFIX = 'MEETING_ROOMS';

export const SET_FILTER = createActionType(MEETING_ROOMS_ACTION_PREFIX, 'SET_FILTER');

export const setFilter = (field, value) => ({
	type: SET_FILTER,
	payload: {
		field,
		value,
	},
});
