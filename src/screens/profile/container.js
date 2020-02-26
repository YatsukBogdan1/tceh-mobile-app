import { connect } from 'react-redux';
import View from './view';
import { initFormValues } from 'actions/personal-info';

const mapsStateToProps = state => ({ user: state.user });
const mapDispatchToProps = {
	initFormValues,
};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
