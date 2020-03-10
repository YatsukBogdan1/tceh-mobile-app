import { SET_FILTER } from 'actions/work-places';
import { WORK_PLACES_CATEGORIES } from '../constants/work-places';

const initialState = {
	filters: {
		capacity: 20,
		locationId: 'park',
		price: 6000,
		type: WORK_PLACES_CATEGORIES.OFFICE,
		windows: true,
	},
};

const registrationForm = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER:
			return {
				...state,
				filters: {
					...state.filters,
					[action.payload.field]: action.payload.value,
				},
			};
		default:
			return state;
	}
};

export default registrationForm;
