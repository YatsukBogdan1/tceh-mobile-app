import {
	SET_FIELD_ERROR,
	SET_FIELD_PRISTINE,
	SET_FIELD_VALUE,
} from 'actions/authorization';
import { validateAuthFormField } from 'validations/auth-form';
import type { AuthorizationFormState } from 'flow/types';

const initialState: AuthorizationFormState = {
	values: {
		phone: '',
		password: '',
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

const authorizationForm = (state: AuthorizationFormState = initialState, action): AuthorizationFormState => {
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
					...state.values,
					[action.payload.field]: action.payload.pristine,
				},
			};
		default:
			return state;
	}
};

export default authorizationForm;
