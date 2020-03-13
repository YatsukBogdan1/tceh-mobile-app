// @flow
import React from 'react';
import {
	Alert,
	Animated,
	FlatList,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import styles from './styles';
import IMAGES_ASSETS from 'assets/images';
import Swiper from 'react-native-swiper';
import Header from './components/header';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Navigation } from 'react-native-navigation';
import CustomButton from 'components/custom-button';
import PhotoStrip from './components/photo-strip';
import { PHOTO_CATEGORIES } from 'constants/locations';
import LinkButton from 'components/link-button';
import MessageInput from 'components/message-input';
import Comment from './components/comment';
import { COLORS } from 'theme';
import Footer from 'components/footer';
import * as SCREENS from '../../constants/screens';
import {selectGallery} from './selectors';

type Props = {
	location: Object,
};

class LocationScreen extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			allCommentsVisible: false,
			comment: '',
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

	static options(passProps) {
		return {
			bottomTabs: {
				visible: false,
			},
		};
	}

	onCommentChange = value => this.setState({ comment: value });

	onCommentsSendPress = () => {
		Alert.alert('Comment sent.');
		this.onCommentChange('');
	};

	componentDidMount(): * {
		Navigation.mergeOptions(this.props.componentId, {
			bottomTabs: {
				visible: false,
			},
		});
	}

	onHeartPress = () => this.setState({ heartActive: !this.state.heartActive });

	onBackPress = () => Navigation.pop(this.props.componentId);

	get imageStyle () {
		return StyleSheet.compose(
			styles.image,
			{
				transform: [{
					translateY: this.state.scrollY.interpolate({
						inputRange: [-99999, 0, 500],
						outputRange: [-99999, 0, 250],
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

	navigateToGallery = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.LOCATION_GALLERY_SCREEN,
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

	navigateToGalleryModal = index => {
		Navigation.showModal({
			component: {
				name: SCREENS.GALLERY_MODAL_SCREEN,
				passProps: {
					initialIndex: index,
					gallery: this.props.location.gallery.reduce((photos, item) => [...photos, ...item.photos], []),
				},
			},
		});
	};

	navigateToWorkplaces = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.WORK_PLACES_SCREEN,
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

	get photosCount () {
		return this.props.location.gallery.reduce((sum, item) => sum + item.photos.length, 0);
	}

	onScroll = ({ nativeEvent: { contentOffset: { y } } }) => {
		if (y >= 400 && !this.state.headerUnderlayVisible) {
			this.setState({ headerUnderlayVisible: true });
		}
		if (y < 400 && this.state.headerUnderlayVisible) {
			this.setState({ headerUnderlayVisible: false });
		}
	};

	showAllComments = () => this.setState({ allCommentsVisible: true });

	get comments () {
		if (this.state.allCommentsVisible) {
			return this.props.location.comments;
		}
		return this.props.location.comments.slice(0, 3);
	}

	renderCommentItem = ({ item }) => (
		<Comment
			user={item.user}
			date={item.date}
			text={item.text}
		/>
	);

	renderCommentsDivider = () => <View style={styles.commentsDivider} />;

	render() {
		const {
			accessibilityText,
			citchenText,
			geoLocation,
			loungeZoneText,
			meetingRoomText,
			name,
			photos,
			gallery,
			officesText,
			square,
			subLabel,
			text,
		} = this.props.location;

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
						source={IMAGES_ASSETS.TCEH_1}
						style={this.imageStyle}
					/>
					<CustomButton
						outlined
						label='Фото-тур'
						LeftIconComponent={
							<IonIcon
								name='ios-list'
								size={15}
							/>
						}
						onPress={this.navigateToGallery}
						style={styles.photoTourButton}
					/>
					<View style={styles.contentContainer}>
						<Text style={styles.label}>{name}</Text>
						<Text style={styles.location}>
							<MaterialCommunityIcon
								name='map-marker'
								size={15}
							/>
							{` ${geoLocation}`}
						</Text>
						<Text style={styles.subLabel}>{subLabel}</Text>
						<Text style={styles.text}>{text}</Text>
						<Text style={styles.subLabel}>Фото-тур</Text>
						{gallery.map(item => (
							<React.Fragment>
								<Text style={styles.text}>{item.name}</Text>
								<PhotoStrip
									onPhotoPress={this.navigateToGalleryModal}
									photos={item.photos}
								/>
							</React.Fragment>
						))}
						<LinkButton
							color={COLORS.MAIN_ORANGE_COLOR}
							label={`Смотреть все ${this.photosCount} фото`}
							onPress={this.navigateToGallery}
						/>
						<Text style={styles.subLabel}>Что говорят наши мемберы</Text>
						<MessageInput
							placeholder='Комментарий'
							onChange={this.onCommentChange}
							value={this.state.comment}
							onSendPress={this.onCommentsSendPress}
						/>
						<FlatList
							ItemSeparatorComponent={this.renderCommentsDivider}
							ListHeaderComponent={this.renderCommentsDivider}
							ListFooterComponent={this.renderCommentsDivider}
							data={this.comments}
							renderItem={this.renderCommentItem}
							keyExtractor={item => item.user.id}
						/>
						{!this.state.allCommentsVisible && (
							<LinkButton
								color={COLORS.MAIN_ORANGE_COLOR}
								label='Смотреть все комментарии'
								onPress={this.showAllComments}
							/>
						)}
					</View>
				</Animated.ScrollView>
				<Footer
					linkLabel='Связаться с нами'
					onLinkPress={() => false}
					buttonLabel='Подбор офиса'
					onButtonPress={this.navigateToWorkplaces}
				/>
			</KeyboardAvoidingView>
		);
	}
}

export default LocationScreen;
