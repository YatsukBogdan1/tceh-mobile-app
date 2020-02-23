import { createActionType } from 'utils';

const REGISTRATION_FORM_ACTION_PREFIX = 'REGISTRATION';

export const SET_FIELD_VALUE = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'SET_FIELD_VALUE');
export const SET_FIELD_PRISTINE = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'SET_FIELD_PRISTINE');

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
