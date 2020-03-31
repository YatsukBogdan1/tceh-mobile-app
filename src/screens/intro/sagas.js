import { takeLatest } from 'redux-saga/effects';
import { ON_REGISTRATION_SUBMIT } from 'actions/registration';
import { API } from 'api';
import

export function * workRegistrationSubmit () {
	yield put(setF)
	this.onNameBlur();
	this.onPasswordBlur();
	this.onPhoneBlur();
	const {
		phone,
		password,
	} = this.props.form.values;
	this.setState({ registrationPending: true });
	API.registration(phone, password)
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(({ response }) => {
			console.log(response);
			if (response.status === 400) {
				if (response.data.password && response.data.password[0]) {
					this.setPasswordError(response.data.password[0]);
				}
				if (response.data.phone && response.data.phone[0]) {
					this.setPhoneError(response.data.phone[0]);
				}
			}
		});
}

export function * watchRegistrationSubmit () {
	yield takeLatest(ON_REGISTRATION_SUBMIT, workRegistrationSubmit);
}
