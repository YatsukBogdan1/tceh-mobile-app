import { connect } from 'react-redux';
import View from './view';
import { selectLocationData } from './selectors';

const mapsStateToProps = state => ({
	location: selectLocationData(state, 'park'),
});
const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
