// @flow
import React from 'react';
import {
	ScrollView,
	TouchableOpacity,
	Text,
	Image,
	View,
} from 'react-native';
import styles from './styles';
import Header from './components/header';
import { Navigation } from 'react-native-navigation';
import TcehIcons from 'tceh-vector-icons';
import * as SCREENS from 'constants/screens';
import PhotoStrip from 'components/photo-strip';
import IMAGE_ASSETS from 'assets/images';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import {COLORS} from '../../theme';
import Footer from '../../components/footer';

type Props = {
	location: Object,
};

class UserScreen extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			heartActive: false,
		};
	}

	onHeartPress = () => this.setState({ heartActive: !this.state.heartActive });

	onBackPress = () => Navigation.pop(this.props.componentId);

	navigateToGalleryModal = index => {
		Navigation.showModal({
			component: {
				name: SCREENS.GALLERY_MODAL_SCREEN,
				passProps: {
					initialIndex: index,
					gallery: this.props.company.photos,
				},
			},
		});
	};

	navigateToStaff = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.STAFF_SCREEN,
				passProps: {
					companyId: this.props.id,
				},
				options: {
					topBar: {
						visible: false,
					},
				},
			},
		});
	};

	render() {
		const {
			id,
			about,
			avatarURI,
			birthday,
			company,
			email,
			location,
			facebookURL,
			instagramURL,
			interests,
			linkedInURL,
			name,
			phone,
			position,
			skills,
			surname,
		} = this.props.user;

		return (
			<View style={styles.container}>
				<Header
					heartActive={this.state.heartActive}
					onBackPress={this.onBackPress}
					onHeartPress={this.onHeartPress}
				/>

				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.contentContainer}
					style={styles.scrollView}
				>
					<View style={styles.row}>
						<Image
							resizeMode='cover'
							source={avatarURI}
							style={styles.avatar}
						/>
						<View>
							<Text style={styles.name}>{name} {surname}</Text>
							<Text style={styles.position}>{position}</Text>
							<Text style={styles.company}>{company}</Text>
						</View>
					</View>
					<View style={styles.socialButtonsContainer}>
						<TouchableOpacity>
							<EntypoIcon
								size={30}
								name='facebook-with-circle'
								color={COLORS.MAIN_ORANGE_COLOR}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<EntypoIcon
								size={30}
								name='linkedin-with-circle'
								color={COLORS.MAIN_ORANGE_COLOR}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<EntypoIcon
								size={30}
								name='instagram-with-circle'
								color={COLORS.MAIN_ORANGE_COLOR}
							/>
						</TouchableOpacity>
					</View>
					<Text style={styles.subHeader}>О себе</Text>
					<Text style={styles.text}>{about}</Text>
					<View style={styles.locationRow}>
						<View style={styles.textRow}>
							<TcehIcons name='map-marker' />
							<Text style={styles.smallText}>{location}</Text>
						</View>
						<View style={styles.textRow}>
							<TcehIcons name='phone-ring' />
							<Text style={styles.smallText}>{phone}</Text>
						</View>
					</View>
					<View style={styles.birthdayRow}>
						<View style={styles.textRow}>
							<TcehIcons name='cake' />
							<Text style={styles.smallText}>{birthday}</Text>
						</View>
						<View style={styles.textRow}>
							<TcehIcons name='letter' />
							<Text style={styles.smallText}>{email}</Text>
						</View>
					</View>
					<Text style={styles.subHeader}>Навыки</Text>
					<Text style={styles.text}>{skills}</Text>
					<Text style={styles.subHeader}>Интересы</Text>
					<Text style={styles.text}>{interests}</Text>
				</ScrollView>
				<Footer
					buttonLabel='Написать'
					onButtonPress={() => false}
					linkLabel='Позвонить'
					onLinkPress={() => false}
				/>
			</View>
		);
	}
}

export default UserScreen;
