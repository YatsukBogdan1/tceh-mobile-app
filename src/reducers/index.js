import authorizationForm from './authorization-form';
import personalInfoForm from './personal-info-form';
import registrationForm from './registration-form';
import user from './user';
import { combineReducers } from 'redux';

export default combineReducers({
	user,
	registrationForm,
	authorizationForm,
	personalInfoForm,
});
