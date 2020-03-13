import { connect } from 'react-redux';
import ScreenName from './view';
import { selectGallery } from '../../selectors';

const mapsStateToProps = state => ({
	gallery: selectGallery(state, 'park'),
});
const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(ScreenName);
