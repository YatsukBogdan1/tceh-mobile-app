import {
	put,
	select,
	takeLatest,
} from 'redux-saga/effects';
import * as registrationActions from 'actions/registration';
import * as loginActions from 'actions/authorization';
import { Alert, AsyncStorage } from 'react-native';
import { API } from 'api';
import { State } from 'interfaces';

export function * workRegistrationSubmit (action) {
	yield put(registrationActions.validateForm());

	yield put(registrationActions.setFieldPristine('name', false));
	yield put(registrationActions.setFieldPristine('phone', false));
	yield put(registrationActions.setFieldPristine('password', false));

	const form = yield select(state => state.registrationForm);
	if (Object.values(form.errors).filter(error => error !== null).length > 0) {
		return;
	}

	const {
		phone,
		password,
	} = form.values;

	yield put(registrationActions.registrationRequest());
	try {
		const response = yield API.registration(phone, password);
		yield put(registrationActions.registrationRequestSuccess());
		if (action.callback) {
			action.callback(response);
		}
	} catch (err) {
		yield put(registrationActions.registrationRequestFail());
		if (!err.response) {
			return;
		}
		const { response } = err;

		if (response.status === 400) {
			if (response.data.password && response.data.password[0]) {
				yield put(registrationActions.setFieldError('password', response.data.password[0]));
			}
			if (response.data.phone && response.data.phone[0]) {
				yield put(registrationActions.setFieldError('phone', response.data.phone[0]));
			}
		}
		if (response.status === 405) {
			Alert.alert('Registration request error', 'Request method not allowed');
			return;
		}
		if (action.callback) {
			action.callback(response);
		}
	}
}

export function * watchRegistrationSubmit () {
	yield takeLatest(registrationActions.ON_REGISTRATION_SUBMIT, workRegistrationSubmit);
}

export function * workLoginSubmit (action) {
	yield put(loginActions.validateAuthorizationForm());

	yield put(loginActions.setAuthorizationFormFieldPristine('phone', false));
	yield put(loginActions.setAuthorizationFormFieldPristine('password', false));

	const form = yield select((state: State) => state.authorizationForm);
	if (Object.values(form.errors).filter(error => error !== null).length > 0) {
		return;
	}

	const {
		phone,
		password,
	} = form.values;

	yield put(loginActions.authorizationRequest());
	try {
		const response = yield API.login(phone, password);
		const { data } = response;
		API.setToken(data.token);
		AsyncStorage.setItem('token', data.token);
		yield put(loginActions.authorizationRequestSuccess(data));
		if (action.callback) {
			action.callback(response);
		}
	} catch (err) {
		yield put(loginActions.authorizationRequestFail());
		if (!err.response) {
			return;
		}
		const { response } = err;
		if (response.status === 400) {
			if (response.data.password && response.data.password[0]) {
				yield put(loginActions.setAuthorizationFormFieldPristine('password', response.data.password[0]));
			}
			if (response.data.phone && response.data.phone[0]) {
				yield put(loginActions.setAuthorizationFormFieldPristine('phone', response.data.phone[0]));
			}
		}
		if (response.status === 303) {
			Alert.alert('Oops', response.data.detail);
		}
	}
}

export function * watchLoginSubmit () {
	yield takeLatest(loginActions.ON_LOGIN_SUBMIT, workLoginSubmit);
}
