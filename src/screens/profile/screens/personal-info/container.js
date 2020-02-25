import { connect } from 'react-redux';
import PersonalInfoView from './view';
import type { State } from 'flow/types';
import {
	setFieldValue,
	setFieldPristine,
} from 'actions/personal-info';

const mapsStateToProps = (state: State) => ({ form: state.personalInfoForm });
const mapDispatchToProps = {
	setFieldValue,
	setFieldPristine,
};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(PersonalInfoView);
