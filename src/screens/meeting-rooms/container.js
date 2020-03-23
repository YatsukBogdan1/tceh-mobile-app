import { connect } from 'react-redux';
import View from './view';
import { setFilter } from 'actions/meeting-rooms';

const mapsStateToProps = state => ({
	filters: state.meetingRooms.filters,
	label: state.locations.data.park.name,
	meetingRooms: Object.values(state.meetingRooms.data).filter(meetingRoom => meetingRoom.locationId === 'park'),
});

const mapDispatchToProps = {
	setFilter,
};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
