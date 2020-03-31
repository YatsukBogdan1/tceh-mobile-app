import { connect } from 'react-redux';
import ScreenName from './view';

const mapsStateToProps = state => ({
	companies: Object.values(state.companies),
	locations: Object.values(state.locations.data),
	locationsObject: state.locations.data,
	locationsOptions: Object.values(state.locations.data).map(location => ({
		text: location.name,
		value: location.id,
	})),
});
const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(ScreenName);
