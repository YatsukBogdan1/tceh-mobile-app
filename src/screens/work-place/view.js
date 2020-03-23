// @flow
import React from 'react';
import {
	Animated,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import styles from './styles';
import Header from './components/header';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Navigation } from 'react-native-navigation';
import PhotoStrip from 'components/photo-strip';
import Footer from 'components/footer';
import * as SCREENS from '../../constants/screens';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {
	WORK_PLACE_STATUS,
	WORK_PLACE_STATUS_LABELS,
} from 'constants/work-places';
import { COLORS } from 'theme';
import baseStyles from 'components/base/styles';

type Props = {
	location: Object,
};

class LocationScreen extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			headerUnderlayVisible: false,
			heartActive: false,
			scrollY: new Animated.Value(0),
		};
		this.onScrollEvent = Animated.event(
			[{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
			{ useNativeDriver: true }
		);
		this.onScrollForkedEvent = Animated.forkEvent(this.onScrollEvent, this.onScroll);
	}

	onHeartPress = () => this.setState({ heartActive: !this.state.heartActive });

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

	navigateToGalleryModal = index => {
		Navigation.showModal({
			component: {
				name: SCREENS.GALLERY_MODAL_SCREEN,
				passProps: {
					initialIndex: index,
					gallery: this.props.workplace.photos.map(photo => ({
						label: null,
						photo,
					})),
				},
			},
		});
	};

	showTourRequestModal = () => {
		Navigation.showModal({
			component: {
				name: SCREENS.COMMON_MODAL,
				passProps: {
					id: 'tour_request_modal',
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

	onScroll = ({ nativeEvent: { contentOffset: { y } } }) => {
		if (y >= 400 && !this.state.headerUnderlayVisible) {
			this.setState({ headerUnderlayVisible: true });
		}
		if (y < 400 && this.state.headerUnderlayVisible) {
			this.setState({ headerUnderlayVisible: false });
		}
	};

	get photos () {
		return this.props.workplace.photos.map((photo, index) => ({
			galleryIndex: index,
			photo,
		}));
	}

	renderStatusIcon = () => {
		switch (this.props.workplace.status) {
			case WORK_PLACE_STATUS.OCCUPIED:
				return (
					<View style={styles.statusOccupiedContainer}>
						<Ionicons name='ios-information' size={20} color={COLORS.WHITE}/>
					</View>
				);
			case WORK_PLACE_STATUS.OCCUPATION_EXPIRING:
				return (
					<View style={styles.statusOccupationExpiringContainer}>
						<Ionicons name='ios-checkmark' size={20} color={COLORS.WHITE}/>
					</View>
				);
			case WORK_PLACE_STATUS.FREE:
			default:
				return (
					<View style={styles.statusFreeContainer}>
						<Ionicons name='ios-checkmark' size={20} color={COLORS.WHITE}/>
					</View>
				);
		}
	};

	render() {
		console.log(this.props);
		const {
			capacity,
			description,
			id,
			imageURI,
			label,
			location,
			locationId,
			photos,
			price,
			square,
			status,
			type,
			windows,
		} = this.props.workplace;

		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<Header
					heartActive={this.state.heartActive}
					underlayVisible={this.state.headerUnderlayVisible}
					onBackPress={this.onBackPress}
					onHeartPress={this.onHeartPress}
				/>
				<Animated.ScrollView
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={1}
					onScroll={this.onScrollForkedEvent}
				>
					<Animated.Image
						resizeMode='cover'
						source={imageURI}
						style={this.imageStyle}
					/>
					<View style={styles.contentContainer}>
						<View style={styles.row}>
							<Text style={styles.label}>{label}</Text>
							<View style={styles.statusTextContainer}>
								<Text style={baseStyles.defaultText}>
									{WORK_PLACE_STATUS_LABELS[status]}
								</Text>
								{this.renderStatusIcon()}
							</View>
						</View>
						<Text style={styles.location}>
							<MaterialCommunityIcon
								name='map-marker'
								size={15}
							/>
							{` ${location}`}
						</Text>
						<Text style={styles.subLabel}>Описание</Text>
						<Text style={styles.text}>{description}</Text>
						<PhotoStrip
							onPhotoPress={this.navigateToGalleryModal}
							photos={this.photos}
						/>
					</View>
				</Animated.ScrollView>
				<Footer
					linkLabel={`от ${price}$/мес`}
					onLinkPress={() => false}
					buttonLabel='Заявка на тур'
					onButtonPress={this.showTourRequestModal}
				/>
			</KeyboardAvoidingView>
		);
	}
}

export default LocationScreen;
