import {
	REGISTRATION_REQUEST,
	REGISTRATION_REQUEST_FAIL,
	REGISTRATION_REQUEST_SUCCESS,
	SET_FIELD_ERROR,
	SET_FIELD_PRISTINE,
	SET_FIELD_VALUE,
	VALIDATE_FORM,
} from 'actions/registration';
import { validateAuthFormField } from 'validations/auth-form';
import type { RegistrationFormState } from 'flow/types';

const initialState: RegistrationFormState = {
	pending: false,
	values: {
		name: 'Bohdan',
		phone: '0968246091',
		password: '123456',
	},
	pristine: {
		name: true,
		phone: true,
		password: true,
	},
	errors: {
		name: null,
		phone: null,
		password: null,
	},
};

const registrationForm = (state: RegistrationFormState = initialState, action): RegistrationFormState => {
	switch (action.type) {
		case SET_FIELD_VALUE:
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
		case SET_FIELD_ERROR:
			return {
				...state,
				errors: {
					...state.errors,
					[action.payload.field]: action.payload.error,
				},
			};
		case SET_FIELD_PRISTINE:
			return {
				...state,
				pristine: {
					...state.pristine,
					[action.payload.field]: action.payload.pristine,
				},
			};
		case VALIDATE_FORM:
			return {
				...state,
				errors: {
					name: validateAuthFormField('name', state.values.name),
					phone: validateAuthFormField('phone', state.values.phone),
					password: validateAuthFormField('password', state.values.password),
				},
			};
		case REGISTRATION_REQUEST:
			return {
				...state,
				pending: true,
			};
		case REGISTRATION_REQUEST_FAIL:
		case REGISTRATION_REQUEST_SUCCESS:
			return {
				...state,
				pending: false,
			};
		default:
			return state;
	}
};

export default registrationForm;
