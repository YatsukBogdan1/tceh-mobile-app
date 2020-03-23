import { connect } from 'react-redux';
import View from './view';

const mapsStateToProps = (state, ownProps) => ({
	filters: state.meetingRooms.filters,
	meetingRoom: state.meetingRooms.data[ownProps.id],
});
const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
