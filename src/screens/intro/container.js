import { connect } from 'react-redux';
import View from './view';
import { onRegistrationSubmit } from 'actions/registration';
import { onLoginSubmit } from 'actions/authorization';

const mapDispatchToProps = {
	onRegistrationSubmit,
	onLoginSubmit,
};

export default connect(
	null,
	mapDispatchToProps,
)(View);
