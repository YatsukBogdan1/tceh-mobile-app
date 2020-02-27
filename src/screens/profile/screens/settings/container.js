import { connect } from 'react-redux';
import View from './view';
import { onSettingChange } from 'actions/user';

const mapsStateToProps = state => ({
	settings: state.user.settings,
});

const mapDispatchToProps = {
	onSettingChange,
};

export default connect(
	mapsStateToProps,
	mapDispatchToProps,
)(View);
