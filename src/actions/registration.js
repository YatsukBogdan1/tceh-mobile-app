import { createActionType } from 'utils';

const REGISTRATION_FORM_ACTION_PREFIX = 'REGISTRATION';

export const SET_FIELD_VALUE = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'SET_FIELD_VALUE');
export const SET_FIELD_ERROR = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'SET_FIELD_ERROR');
export const SET_FIELD_PRISTINE = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'SET_FIELD_PRISTINE');
export const VALIDATE_FORM = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'VALIDATE_FORM');
export const ON_REGISTRATION_SUBMIT = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'ON_REGISTRATION_SUBMIT');
export const REGISTRATION_REQUEST = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'REGISTRATION_REQUEST');
export const REGISTRATION_REQUEST_FAIL = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'REGISTRATION_REQUEST_FAIL');
export const REGISTRATION_REQUEST_SUCCESS = createActionType(REGISTRATION_FORM_ACTION_PREFIX, 'REGISTRATION_REQUEST_SUCCESS');

export const setFieldValue = (field, value) => ({
	type: SET_FIELD_VALUE,
	payload: {
		field,
		value,
	},
});

export const setFieldError = (field, error) => ({
	type: SET_FIELD_ERROR,
	payload: {
		field,
		error,
	},
});

export const setFieldPristine = (field, pristine) => ({
	type: SET_FIELD_PRISTINE,
	payload: {
		field,
		pristine,
	},
});

export const validateForm = () => ({ type: VALIDATE_FORM });

export const onRegistrationSubmit = callback => ({ type: ON_REGISTRATION_SUBMIT, callback });

export const registrationRequest = () => ({ type: REGISTRATION_REQUEST });
export const registrationRequestFail = () => ({ type: REGISTRATION_REQUEST_FAIL });
export const registrationRequestSuccess = () => ({ type: REGISTRATION_REQUEST_SUCCESS });
