import {
	SET_FIELD_VALUE,
	SET_FIELD_PRISTINE,
} from 'actions/registration';
import { validateAuthFormField } from 'validations/auth-form';
import type { RegistrationFormState } from 'flow/types';

const initialState: RegistrationFormState = {
	values: {
		name: '',
		phone: '',
		password: '',
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

export default registrationForm;
