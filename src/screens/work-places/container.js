import { connect } from 'react-redux';
import View from './view';
import { setFilter } from 'actions/work-places';

const mapsStateToProps = state => ({
	filters: state.workplaces.filters,
	label: state.locations.data.park.name,
	workplaces: state.locations.data.park.workplaces,
});
const mapDispatchToProps = {
	setFilter,
};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
