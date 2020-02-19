// @flow
import React from 'react';
import { Switch } from 'react-native';
// import {} from ''
import { COLORS } from 'theme';

const CustomSwitch = props => (
	<Switch
		{...props}
		trackColor={{ true: COLORS.MAIN_ORANGE_COLOR }}
	/>
);

export default CustomSwitch;
