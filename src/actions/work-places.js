export const SET_FILTER = 'SET_FILTER';

export const setFilter = (field, value) => ({
	type: SET_FILTER,
	payload: {
		field,
		value,
	},
});
