import { connect } from 'react-redux';
import View from './view';

const mapsStateToProps = state => ({
	benefits: state.locations.benefits,
	companies: Object.values(state.companies),
	locations: Object.values(state.locations.data),
	locationsObject: state.locations.data,
	userRole: state.user.role,
});

const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
