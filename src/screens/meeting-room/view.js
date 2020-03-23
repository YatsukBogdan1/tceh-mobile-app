// @flow
import React from 'react';
import {
	Animated,
	StyleSheet,
	Text,
	ScrollView,
	View,
} from 'react-native';
import styles from './styles';
import Header from './components/header';
import { Navigation } from 'react-native-navigation';
import Footer from 'components/footer';
import * as SCREENS from 'constants/screens';
import TcehIcons from 'tceh-vector-icons';
import TouchableDateBadge from 'components/touchable-date-badge';
import {getDateString} from 'utils';
import moment from 'moment';
import DateFilterBadge from './components/date-filter-badge';
import TimeFilterBadge from './components/time-filter-badge';

type Props = {
	meetingRoom: Object,
};

class MeetingRoomScreen extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			scrollY: new Animated.Value(0),
		};
		this.onScrollEvent = Animated.event(
			[{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
			{ useNativeDriver: true }
		);
	}

	onBackPress = () => Navigation.pop(this.props.componentId);

	get imageStyle () {
		return StyleSheet.compose(
			styles.image,
			{
				transform: [{
					translateY: this.state.scrollY.interpolate({
						inputRange: [0, 300],
						outputRange: [0, 150],
					}),
				}, {
					scaleX: this.state.scrollY.interpolate({
						inputRange: [-150, 0, 99999],
						outputRange: [1.5, 1, 1],
					}),
				}, {
					scaleY: this.state.scrollY.interpolate({
						inputRange: [-150, 0, 99999],
						outputRange: [1.5, 1, 1],
					}),
				}],
			},
		);
	}

	navigateToCalendar = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.MEETING_ROOMS_CALENDAR,
				passProps: {
					id: this.props.meetingRoom.id,
				},
				options: {
					topBar: {
						visible: false,
					},
					bottomTabs: {
						visible: false,
					},
				},
			},
		});
	};

	onBookingPress = () => {
		Navigation.showModal({
			component: {
				name: SCREENS.COMMON_MODAL,
				passProps: {
					id: 'booking_request_modal',
					data: {
						meetingRoomId: this.props.meetingRoom.id,
					},
				},
				options: {
					modalTransitionStyle: 'crossDissolve',
					modalPresentationStyle: 'overCurrentContext',
					layout: {
						backgroundColor: 'transparent',
					},
				},
			},
		});
	};

	render() {
		const {
			capacity,
			description,
			desk,
			flipchart,
			id,
			imageURI,
			label,
			locationId,
			photos,
			projector,
			screen,
			type,
		} = this.props.meetingRoom;

		return (
			<View style={styles.container}>
				<Header
					heartActive={this.state.heartActive}
					underlayVisible={this.state.headerUnderlayVisible}
					onBackPress={this.onBackPress}
					onHeartPress={this.onHeartPress}
				/>
				<Animated.ScrollView
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={1}
					onScroll={this.onScrollEvent}
				>
					<Animated.Image
						resizeMode='cover'
						source={imageURI}
						style={this.imageStyle}
					/>
					<View style={styles.contentContainer}>
						<View style={[styles.row, styles.marginBottom]}>
							<Text style={styles.label}>{label}</Text>
							<View style={styles.row}>
								<TcehIcons name='chair' size={20}/>
								<Text style={styles.capacityText}>{capacity} мест</Text>
							</View>
						</View>
						<View style={[styles.row, styles.marginBottom]}>
							<DateFilterBadge />
							<TimeFilterBadge />
						</View>
						<Text style={[styles.text, styles.marginBottom]}>Доступное время</Text>
						<ScrollView
							style={[styles.overflowVisible, styles.marginBottom]}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<View style={styles.row}>
								<TouchableDateBadge
									label='12:30-13:30'
									onPress={() => false}
								/>
								<View style={{ width: 10 }}/>
								<TouchableDateBadge
									label='15:00-18:00'
									onPress={() => false}
								/>
								<View style={{ width: 10 }}/>
								<TouchableDateBadge
									label='18:00-19:00'
									onPress={() => false}
								/>
								<View style={{ width: 10 }}/>
								<TouchableDateBadge
									label='21:00-00:00'
									onPress={() => false}
								/>
							</View>
						</ScrollView>
						<Text style={[styles.text, styles.marginBottom]}>{description}</Text>
						<View style={[styles.equipmentContainer, styles.marginBottom]}>
							{projector && (
								<View style={[styles.column]}>
									<TcehIcons
										style={styles.marginBottomSmall}
										name='projector'
										size={20}
									/>
									<Text>Проектор</Text>
								</View>
							)}
							{screen && (
								<View style={[styles.column]}>
									<TcehIcons
										style={styles.marginBottomSmall}
										name='screen'
										size={20}
									/>
									<Text>Экран</Text>
								</View>
							)}
							{flipchart && (
								<View style={[styles.column]}>
									<TcehIcons
										style={styles.marginBottomSmall}
										name='flipchart'
										size={20}
									/>
									<Text>Флипчарт</Text>
								</View>
							)}
							{desk && (
								<View style={[styles.column]}>
									<TcehIcons
										style={styles.marginBottomSmall}
										name='blackboard'
										size={20}
									/>
									<Text>Доска</Text>
								</View>
							)}
						</View>
					</View>
				</Animated.ScrollView>
				<Footer
					linkLabel='Календарь'
					onLinkPress={this.navigateToCalendar}
					buttonLabel='Бронировать'
					onButtonPress={this.onBookingPress}
				/>
			</View>
		);
	}
}

export default MeetingRoomScreen;
