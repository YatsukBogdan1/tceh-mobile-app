import { createActionType } from 'utils';

const AUTHORIZATION_FORM_ACTION_PREFIX = 'AUTHORIZATION';

export const SET_FIELD_VALUE = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'SET_FIELD_VALUE');
export const SET_FIELD_PRISTINE = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'SET_FIELD_PRISTINE');

export const setFieldValue = (field, value) => ({
	type: SET_FIELD_VALUE,
	payload: {
		field,
		value,
	},
});

export const setFieldPristine = (field, pristine) => ({
	type: SET_FIELD_PRISTINE,
	payload: {
		field,
		pristine,
	},
});