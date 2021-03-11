import authorizationForm from './authorization-form';
import companies from './companies';
import company from './company';
import events from './events';
import locations from './locations';
import meetingRooms from './meeting-rooms';
import personalInfoForm from './personal-info-form';
import registrationForm from './registration-form';
import user from './user';
import users from './users';
import workplaces from './work-places';
import recoveryForm from './recovery-form';
import { combineReducers } from 'redux';

export default combineReducers({
	authorizationForm,
	companies,
	company,
	events,
	locations,
	meetingRooms,
	personalInfoForm,
	recoveryForm,
	registrationForm,
	user,
	users,
	workplaces,
});
