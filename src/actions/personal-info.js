import { createActionType } from 'utils';

const PERSONAL_INFO_FORM_ACTION_PREFIX = 'PERSONAL_INFO_FORM';

export const SET_FIELD_VALUE = createActionType(PERSONAL_INFO_FORM_ACTION_PREFIX, 'SET_FIELD_VALUE');
export const SET_FIELD_PRISTINE = createActionType(PERSONAL_INFO_FORM_ACTION_PREFIX, 'SET_FIELD_PRISTINE');
export const INIT_FORM_VALUES = createActionType(PERSONAL_INFO_FORM_ACTION_PREFIX, 'INIT_FORM_VALUES');

export const initFormValues = values => ({
	type: INIT_FORM_VALUES,
	payload: {
		values,
	},
});

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
