import { connect } from 'react-redux';
import View from './view';

const mapsStateToProps = state => ({
	locations: Object.values(state.locations.data),
	benefits: state.locations.benefits,
});

const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
