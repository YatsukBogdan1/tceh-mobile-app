import { connect } from 'react-redux';
import View from './view';

const mapsStateToProps = (state, ownProps) => ({
	meetingRoom: state.meetingRooms.data[ownProps.id],
});
const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
