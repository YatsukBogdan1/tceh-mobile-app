import {
	SET_FIELD_VALUE,
	SET_FIELD_PRISTINE,
} from 'actions/authorization';
import { validateField } from 'validations/auth-form';
import type { AuthorizationFormState } from 'flow/types';

const initialState = {
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

const authorizationForm = (state: AuthorizationFormState = initialState, action) => {
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
					[action.payload.field]: validateField(action.payload.field, action.payload.value),
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
