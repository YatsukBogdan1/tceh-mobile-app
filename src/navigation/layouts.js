import * as SCREENS from 'constants/screens';
import IMAGE_ASSETS from 'assets/images';
import { COLORS } from 'theme';

export const INTRO_SCREEN_LAYOUT = {
	root: {
		stack: {
			children: [{
				component: {
					name: SCREENS.INTRO_SCREEN,
					options: {
						topBar: {
							visible: false,
						},
					},
				},
			}],
		},
	},
};

export const TABS_LAYOUT = {
	bottomTabs: {
		children: [{
			stack: {
				children: [{
					component: {
						name: SCREENS.LOCATIONS_SCREEN,
						options: {
							bottomTab: {
								text: 'Локации',
								icon: IMAGE_ASSETS.HOME_ICON,
								selectedIconColor: COLORS.MAIN_ORANGE_COLOR,
								selectedTextColor: COLORS.MAIN_ORANGE_COLOR,
							},
						},
					},
				}],
				options: {
					topBar: {
						visible: false,
					},
				},
			},
		}, {
			stack: {
				children: [{
					component: {
						name: SCREENS.MEETING_ROOMS,
						options: {
							bottomTab: {
								text: 'Бронь',
								icon: IMAGE_ASSETS.TABLET_ICON,
								selectedIconColor: COLORS.MAIN_ORANGE_COLOR,
								selectedTextColor: COLORS.MAIN_ORANGE_COLOR,
							},
						},
					},
				}],
				options: {
					topBar: {
						visible: false,
					},
				},
			},
		}, {
			stack: {
				children: [{
					component: {
						name: SCREENS.PROFILE_SCREEN,
						options: {
							bottomTab: {
								text: 'Профиль',
								icon: IMAGE_ASSETS.PERSON_ICON,
								selectedIconColor: COLORS.MAIN_ORANGE_COLOR,
								selectedTextColor: COLORS.MAIN_ORANGE_COLOR,
							},
						},
					},
				}],
				options: {
					topBar: {
						visible: false,
					},
				},
			},
		}],
	},
};
