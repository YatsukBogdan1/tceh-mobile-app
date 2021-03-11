import { createActionType } from 'utils';

const FEED_ACTION_PREFIX = 'FEED';

export const FEED_REQUEST = createActionType(FEED_ACTION_PREFIX, 'FEED_REQUEST');
export const FEED_REQUEST_ERROR = createActionType(FEED_ACTION_PREFIX, 'FEED_REQUEST_ERROR');
export const FEED_REQUEST_SUCCESS = createActionType(FEED_ACTION_PREFIX, 'FEED_REQUEST_SUCCESS');

export const SET_FEED_DATA = createActionType(FEED_ACTION_PREFIX, 'FEED_REQUEST_SUCCESS');
export const SET_FIELD_ERROR = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'SET_FIELD_ERROR');
export const SET_FIELD_PRISTINE = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'SET_FIELD_PRISTINE');
export const VALIDATE_FORM = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'VALIDATE_FORM');
export const ON_LOGIN_SUBMIT = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'ON_LOGIN_SUBMIT');
export const AUTHORIZATION_REQUEST = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'AUTHORIZATION_REQUEST');
export const AUTHORIZATION_REQUEST_FAIL = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'AUTHORIZATION_REQUEST_FAIL');
export const AUTHORIZATION_REQUEST_SUCCESS = createActionType(AUTHORIZATION_FORM_ACTION_PREFIX, 'AUTHORIZATION_REQUEST_SUCCESS');

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
export const onLoginSubmit = callback => ({ type: ON_LOGIN_SUBMIT, callback });
export const authorizationRequest = () => ({ type: AUTHORIZATION_REQUEST });
export const authorizationRequestFail = () => ({ type: AUTHORIZATION_REQUEST_FAIL });
export const authorizationRequestSuccess = () => ({ type: AUTHORIZATION_REQUEST_SUCCESS });
