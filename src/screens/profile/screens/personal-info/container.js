import { connect } from 'react-redux';
import PersonalInfoView from './view';
import type { State } from 'flow/types';
import {
	setFieldValue,
	setFieldPristine,
} from 'actions/personal-info';
import { setUserData } from 'actions/user';

const mapsStateToProps = (state: State) => ({ form: state.personalInfoForm });
const mapDispatchToProps = {
	setFieldPristine,
	setFieldValue,
	setUserData,
};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(PersonalInfoView);
