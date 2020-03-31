import { connect } from 'react-redux';
import PersonalInfoView from './view';
import {
	setFieldValue,
	setFieldPristine,
} from 'actions/company';
import { setUserData } from 'actions/user';

const mapsStateToProps = (state: State) => ({
	user: state.user,
	form: state.company,
	locationsOptions: Object.values(state.locations.data).map(location => ({
		text: location.name,
		value: location.id,
	})),
});
const mapDispatchToProps = {
	setFieldPristine,
	setFieldValue,
	setUserData,
};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(PersonalInfoView);
