import { connect } from 'react-redux';
import View from './view';
import { selectGallery } from '../../selectors';

const mapsStateToProps = state => ({
	gallery: selectGallery(state, 'park'),
});
const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
