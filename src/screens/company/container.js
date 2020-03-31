import { connect } from 'react-redux';
import ScreenName from './view';
import {INDUSTRIES} from '../../constants/company';

const mapsStateToProps = (state, ownProps) => {
	const company = state.companies[ownProps.id];
	return {
		company: {
			...company,
			industry: INDUSTRIES[company.industryId],
			location: state.locations.data[company.locationId].name + ', ' + company.office,
			photos: company.photos.map((uri, index) => ({
				photo: uri,
				galleryIndex: index,
			})),
			staff: company.staff.map(id => state.users[id]),
		},
	};
};

const mapDispatchToProps = {};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(ScreenName);
