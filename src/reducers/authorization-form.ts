import {
	AUTHORIZATION_REQUEST,
	AUTHORIZATION_REQUEST_FAIL,
	AUTHORIZATION_REQUEST_SUCCESS,
	SET_AUTHORIZATION_FORM_FIELD_ERROR,
	SET_AUTHORIZATION_FORM_FIELD_PRISTINE,
	SET_AUTHORIZATION_FORM_FIELD_VALUE,
	VALIDATE_AUTHORIZATION_FORM,
} from 'actions/authorization';
import { validateAuthFormField } from 'validations/auth-form';
import { AuthorizationFormState } from 'interfaces';
import {AuthorizationFormReducerAction} from 'actions/interfaces';

const initialState: AuthorizationFormState = {
	pending: false,
	values: {
		phone: '0968246091',
		password: '123456',
	},
	pristine: {
		phone: true,
		password: true,
	},
	errors: {
		phone: null,
		password: null,
	},
};

const authorizationForm = (
	state: AuthorizationFormState = initialState,
	action: AuthorizationFormReducerAction,
): AuthorizationFormState => {
	switch (action.type) {
		case SET_AUTHORIZATION_FORM_FIELD_VALUE:
			return {
				...state,
				values: {
					...state.values,
					[action.payload.field]: action.payload.value,
				},
				errors: {
					...state.errors,
					[action.payload.field]: validateAuthFormField(action.payload.field, action.payload.value),
				},
			};
		case SET_AUTHORIZATION_FORM_FIELD_ERROR:
			return {
				...state,
				errors: {
					...state.errors,
					[action.payload.field]: action.payload.error,
				},
			};
		case SET_AUTHORIZATION_FORM_FIELD_PRISTINE:
			return {
				...state,
				pristine: {
					...state.pristine,
					[action.payload.field]: action.payload.pristine,
				},
			};
		case VALIDATE_AUTHORIZATION_FORM:
			return {
				...state,
				errors: {
					phone: validateAuthFormField('phone', state.values.phone),
					password: validateAuthFormField('password', state.values.password),
				},
			};
		case AUTHORIZATION_REQUEST:
			return {
				...state,
				pending: true,
			};
		case AUTHORIZATION_REQUEST_FAIL:
		case AUTHORIZATION_REQUEST_SUCCESS:
			return {
				...state,
				pending: false,
			};
		default:
			return state;
	}
};

export default authorizationForm;
