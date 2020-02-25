import {
	SET_FIELD_VALUE,
	SET_FIELD_PRISTINE,
} from 'actions/personal-info';
import { validatePersonalInfoFormField } from 'validations/personal-info-form';
import type { PersonalInfoFormState } from 'flow/types';

const initialState: PersonalInfoFormState = {
	values: {
		about: '',
		birthday: '',
		companyId: null,
		email: '',
		facebookURL: '',
		instagramURL: '',
		interests: '',
		isPrivate: false,
		linkedInURL: '',
		name: '',
		phone: '',
		position: '',
		skills: '',
		surname: '',
	},
	pristine: {
		about: true,
		birthday: true,
		email: true,
		facebookURL: true,
		instagramURL: true,
		interests: true,
		linkedInURL: true,
		name: true,
		phone: true,
		position: true,
		skills: true,
		surname: true,
	},
	errors: {
		about: null,
		birthday: null,
		email: null,
		facebookURL: null,
		instagramURL: null,
		interests: null,
		linkedInURL: null,
		name: null,
		phone: null,
		position: null,
		skills: null,
		surname: null,
	},
};

const personalInfoForm = (state: PersonalInfoFormState = initialState, action): PersonalInfoFormState => {
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
					[action.payload.field]: validatePersonalInfoFormField(action.payload.field, action.payload.value),
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

export default personalInfoForm;
