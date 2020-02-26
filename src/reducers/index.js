import authorizationForm from './authorization-form';
import events from './events';
import personalInfoForm from './personal-info-form';
import registrationForm from './registration-form';
import user from './user';
import { combineReducers } from 'redux';

export default combineReducers({
	authorizationForm,
	events,
	personalInfoForm,
	registrationForm,
	user,
});
