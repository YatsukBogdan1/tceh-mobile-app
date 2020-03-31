import { connect } from 'react-redux';
import ScreenName from './view';

const mapsStateToProps = (state, ownProps) => ({
	companyName: state.companies[ownProps.companyId].label,
	staff: Object.values(state.users).filter(user => user.companyId === ownProps.companyId),
});

const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(ScreenName);
