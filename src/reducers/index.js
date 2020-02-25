import instance from './instance';
import registrationForm from './registration-form';
import authorizationForm from './authorization-form';
import personalInfoForm from './personal-info-form';
import { combineReducers } from 'redux';

export default combineReducers({
	instance,
	registrationForm,
	authorizationForm,
	personalInfoForm,
});
