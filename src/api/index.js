import axios from 'axios';
import { BASE_URL } from 'constants/api';

export class API {
	static _api;

	static init () {
		this._api = axios.create({ baseURL: BASE_URL });
	}

	static setToken (token) {
		this._api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	}

	static registration (phone, password) {
		return this._api.post('/users/registration', { phone, password });
	}

	static login (phone, password) {
		return this._api.post('/users/authorization', { phone, password });
	}

	static activation (phone, code) {
		return this._api.post('/users/activation', { phone, code });
	}

	static activationResend (phone) {
		return this._api.post('/users/activation/resend', { phone });
	}

	static initiateRecovery (phone) {
		return this._api.post('/users/recovery', { phone });
	}

	static recovery (phone, code, password) {
		return this._api.put('/users/recovery', { phone, code, password });
	}

	static users = {
		me: () => {
			return this._api.get('/users/me');
		},
		byId: (id) => {
			return this._api.get(`/users/${id}`);
		},
	}
}
