import axios from 'axios';
import { BASE_URL } from 'constants/api';

export class API {
	static _api;

	static init () {
		const api = axios.create({
			baseURL: BASE_URL,
		});
		this._api = api;
	}

	static setToken (token) {
		this._api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	}

	static registration (phone, password) {
		return this._api.post('/users/registration', JSON.stringify({ phone, password }));
	}
};
