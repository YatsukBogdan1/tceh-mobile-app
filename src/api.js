import axios from 'axios';
import { API_URL } from 'config';

export default class API {
	static api = null;

	static init() {
		this.api = axios.create({ baseURL: API_URL });
	}

	static authorize(token) {
		this.api.headers.common.Authorization = `Bearer ${token}`;
	}
}
