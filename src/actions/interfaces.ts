import {
	AUTHORIZATION_REQUEST,
	AUTHORIZATION_REQUEST_FAIL,
	AUTHORIZATION_REQUEST_SUCCESS,
	SET_AUTHORIZATION_FORM_FIELD_ERROR,
	SET_AUTHORIZATION_FORM_FIELD_PRISTINE,
	SET_AUTHORIZATION_FORM_FIELD_VALUE,
	VALIDATE_AUTHORIZATION_FORM,
} from './authorization';
import { AuthorizationRequestSuccessResponseData } from '../api/interfaces';
import { ON_USER_SETTING_CHANGE, SET_USER_DATA } from './user';
import {
	AuthorizationFormErrors,
	AuthorizationFormPristine,
	AuthorizationFormValues,
	UserSettings,
	UserState,
} from '../interfaces';

export interface OnSettingChangeAction {
    type: typeof ON_USER_SETTING_CHANGE;
    payload: {
        field: keyof UserSettings;
        value: string | boolean;
    }
}

export interface SetUserDataAction {
    type: typeof SET_USER_DATA;
    payload: {
        data: Partial<UserState>;
    }
}

export interface SetAuthorizationFormFieldValueAction {
    type: typeof SET_AUTHORIZATION_FORM_FIELD_VALUE;
    payload: {
        field: keyof AuthorizationFormValues;
        value: string;
    };
}

export interface SetAuthorizationFormFieldErrorAction {
    type: typeof SET_AUTHORIZATION_FORM_FIELD_ERROR;
    payload: {
        field: keyof AuthorizationFormErrors;
        error: string | null;
    };
}

export interface SetAuthorizationFormFieldPristineAction {
    type: typeof SET_AUTHORIZATION_FORM_FIELD_PRISTINE;
    payload: {
        field: keyof AuthorizationFormPristine;
        pristine: boolean;
    };
}

export interface ValidateAuthorizationFormAction {
    type: typeof VALIDATE_AUTHORIZATION_FORM;
}

export interface AuthorizationRequestAction {
    type: typeof AUTHORIZATION_REQUEST;
}

export interface AuthorizationRequestFailAction {
    type: typeof AUTHORIZATION_REQUEST_FAIL;
}

export interface AuthorizationRequestSuccessAction {
    type: typeof AUTHORIZATION_REQUEST_SUCCESS,
    payload: {
        data: AuthorizationRequestSuccessResponseData;
    };
}

export type AuthorizationFormReducerAction =
    | SetAuthorizationFormFieldValueAction
    | SetAuthorizationFormFieldErrorAction
    | SetAuthorizationFormFieldPristineAction
    | ValidateAuthorizationFormAction
    | AuthorizationRequestAction
    | AuthorizationRequestFailAction
    | AuthorizationRequestSuccessAction;

export type UserReducerAction =
    | AuthorizationRequestSuccessAction
    | SetUserDataAction
    | OnSettingChangeAction;
