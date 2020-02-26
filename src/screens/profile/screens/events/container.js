import { connect } from 'react-redux';
import View from './view';

const mapsStateToProps = state => ({
	events: state.user.events
		.map(eventId => state.events[eventId])
		.sort((ev1, ev2) => ev1.timestamp > ev2.timestamp),
});
const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
