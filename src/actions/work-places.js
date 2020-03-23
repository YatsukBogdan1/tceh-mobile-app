import { createActionType } from 'utils';

const WORK_PLACES_ACTION_PREFIX = 'WORK_PLACES';

export const SET_FILTER = createActionType(WORK_PLACES_ACTION_PREFIX, 'SET_FILTER');

export const setFilter = (field, value) => ({
	type: SET_FILTER,
	payload: {
		field,
		value,
	},
});
