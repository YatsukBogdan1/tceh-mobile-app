import { RecoveryFormState } from 'interfaces';

const initialState: RecoveryFormState = {
	phone: '',
	password: '',
	code: '',
};

export const SET_RECOVERY_FORM_FIELD_VALUE = 'SET_RECOVERY_FORM_FIELD_VALUE';

interface SetRecoveryFormFieldValueAction {
    type: typeof SET_RECOVERY_FORM_FIELD_VALUE;
    payload: {
        field: keyof RecoveryFormState;
        value: string;
    };
}

export const setRecoveryFormFieldValue = (field: keyof RecoveryFormState, value: string): SetRecoveryFormFieldValueAction => ({
	type: SET_RECOVERY_FORM_FIELD_VALUE,
	payload: {
		field,
		value,
	},
});

const recoveryForm = (
	state: RecoveryFormState = initialState,
	action: SetRecoveryFormFieldValueAction,
): RecoveryFormState => {
	switch (action.type) {
		case SET_RECOVERY_FORM_FIELD_VALUE:
			return {
				...state,
				[action.payload.field]: action.payload.value,
			};
		default:
			return state;
	}
};

export default recoveryForm;
