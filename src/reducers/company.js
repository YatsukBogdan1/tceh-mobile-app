import {
	SET_FIELD_VALUE,
	SET_FIELD_PRISTINE,
	INIT_FORM_VALUES,
} from 'actions/company';
import IMAGE_ASSETS from '../assets/images';

const initialState = {
	values: {
		address: '',
		description: '',
		email: '',
		facebookURL: 'https://url',
		industryId: null,
		instagramURL: 'https://url',
		isPrivate: false,
		label: '',
		linkedInURL: 'https://url',
		locationId: null,
		managerId: null,
		office: '',
		phone: '',
		website: '',
	},
	pristine: {
		address: true,
		description: true,
		email: true,
		facebookURL: true,
		instagramURL: true,
		label: true,
		linkedInURL: true,
		office: true,
		phone: true,
		website: true,
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
			};
		case SET_FIELD_PRISTINE:
			return {
				...state,
				pristine: {
					...state.values,
					[action.payload.field]: action.payload.pristine,
				},
			};
		case INIT_FORM_VALUES:
			return {
				...initialState,
				values: action.payload.values,
			};
		default:
			return state;
	}
};

export default personalInfoForm;
