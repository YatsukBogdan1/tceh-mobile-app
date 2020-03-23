import { connect } from 'react-redux';
import View from './view';
import { setFilter } from 'actions/meeting-rooms';

const mapsStateToProps = state => ({
	filters: state.meetingRooms.filters,
	locationsOptions: Object.values(state.locations.data).map(location => ({
		text: location.name,
		value: location.id,
	})),
});

const mapDispatchToProps = {
	setFilter,
};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
