import { createActionType } from 'utils';

const COMPANIES_ACTION_PREFIX = 'COMPANIES';

export const SET_COMPANIES_DATA = createActionType(COMPANIES_ACTION_PREFIX, 'SET_COMPANIES_DATA');

export const setCompaniesData = data => ({
	type: SET_COMPANIES_DATA,
	payload: {
		data,
	},
});
