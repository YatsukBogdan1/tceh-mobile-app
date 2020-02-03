export const TEMPLATE_ACTION = 'TEMPLATE_ACTION';

export const templateAction = payload => ({
	type: TEMPLATE_ACTION,
	payload: {
		payload,
	},
});
