import {
	AuthorizationRequestAction,
	AuthorizationRequestFailAction,
	AuthorizationRequestSuccessAction,
	SetAuthorizationFormFieldErrorAction,
	SetAuthorizationFormFieldPristineAction,
	SetAuthorizationFormFieldValueAction,
} from './interfaces';
import {AuthorizationRequestSuccessResponseData} from '../api/interfaces';
import {AuthorizationFormErrors, AuthorizationFormPristine, AuthorizationFormValues} from '../interfaces';

export const SET_AUTHORIZATION_FORM_FIELD_VALUE = 'SET_AUTHORIZATION_FORM_FIELD_VALUE';
export const SET_AUTHORIZATION_FORM_FIELD_ERROR = 'SET_AUTHORIZATION_FORM_FIELD_ERROR';
export const SET_AUTHORIZATION_FORM_FIELD_PRISTINE = 'SET_AUTHORIZATION_FORM_FIELD_PRISTINE';
export const VALIDATE_AUTHORIZATION_FORM = 'VALIDATE_AUTHORIZATION_FORM';
export const ON_LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';
export const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_REQUEST_FAIL = 'AUTHORIZATION_REQUEST_FAIL';
export const AUTHORIZATION_REQUEST_SUCCESS = 'AUTHORIZATION_REQUEST_SUCCESS';

export const setAuthorizationFormFieldValue = (
	field: keyof AuthorizationFormValues,
	value: string,
): SetAuthorizationFormFieldValueAction => ({
	type: SET_AUTHORIZATION_FORM_FIELD_VALUE,
	payload: {
		field,
		value,
	},
});

export const setAuthorizationFormFieldError = (field: keyof AuthorizationFormErrors, error: string | null): SetAuthorizationFormFieldErrorAction => ({
	type: SET_AUTHORIZATION_FORM_FIELD_ERROR,
	payload: {
		field,
		error,
	},
});

export const setAuthorizationFormFieldPristine = (field: keyof AuthorizationFormPristine, pristine: boolean): SetAuthorizationFormFieldPristineAction => ({
	type: SET_AUTHORIZATION_FORM_FIELD_PRISTINE,
	payload: {
		field,
		pristine,
	},
});

export const validateAuthorizationForm = () => ({ type: VALIDATE_AUTHORIZATION_FORM });

export const onLoginSubmit = (callback: (response: Record<string, unknown>) => void) => ({ type: ON_LOGIN_SUBMIT, callback });

export const authorizationRequest = (): AuthorizationRequestAction => ({ type: AUTHORIZATION_REQUEST });

export const authorizationRequestFail = (): AuthorizationRequestFailAction => ({ type: AUTHORIZATION_REQUEST_FAIL });

export const authorizationRequestSuccess = (data: AuthorizationRequestSuccessResponseData): AuthorizationRequestSuccessAction => ({
	type: AUTHORIZATION_REQUEST_SUCCESS,
	payload: {
		data,
	},
});
