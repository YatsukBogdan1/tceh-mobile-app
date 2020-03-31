import { connect } from 'react-redux';
import ScreenName from './view';

const mapsStateToProps = (state, ownProps) => {
	const user = state.users[ownProps.id];
	const company = state.companies[user.companyId];

	return {
		user: {
			...user,
			company: company.label,
			location: state.locations.data[company.locationId].name + ', ' + company.office,
		},
	};
};

const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(ScreenName);
