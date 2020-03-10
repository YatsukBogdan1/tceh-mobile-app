import authorizationForm from './authorization-form';
import events from './events';
import locations from './locations';
import personalInfoForm from './personal-info-form';
import registrationForm from './registration-form';
import user from './user';
import workplaces from './work-places';
import { combineReducers } from 'redux';

export default combineReducers({
	authorizationForm,
	events,
	locations,
	personalInfoForm,
	registrationForm,
	user,
	workplaces,
});
