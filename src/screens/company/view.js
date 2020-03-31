// @flow
import React from 'react';
import {
	ScrollView,
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
import StaffPreview from './components/staff-preview';

type Props = {
	location: Object,
};

class CompanyScreen extends React.Component<Props> {
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
			avatarURI,
			backgroundURI,
			description,
			email,
			fullDescription,
			industry,
			label,
			location,
			phone,
			photos,
			website,
			staff,
		} = this.props.company;

		return (
			<View style={styles.container}>
				<Header
					heartActive={this.state.heartActive}
					onBackPress={this.onBackPress}
					onHeartPress={this.onHeartPress}
				/>
				<View style={styles.backgroundImageContainer}>
					<Image
						resizeMode='cover'
						source={backgroundURI}
						style={styles.backgroundImage}
					/>
					<Image
						resizeMode='cover'
						source={avatarURI}
						style={styles.logo}
					/>
				</View>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={styles.scrollView}
					contentContainerStyle={styles.scrollViewContentContainer}
				>
					<Text style={styles.label}>{label}</Text>
					<Text style={styles.industry}>{industry}</Text>
					<View style={styles.row}>
						<View style={styles.textRow}>
							<TcehIcons name='map-marker' />
							<Text style={styles.smallText}>{location}</Text>
						</View>
						<View style={styles.textRow}>
							<TcehIcons name='phone-ring' />
							<Text style={styles.smallText}>{phone}</Text>
						</View>
					</View>
					<View style={styles.row}>
						<View style={styles.textRow}>
							<TcehIcons name='globe' />
							<Text style={styles.smallText}>{website}</Text>
						</View>
						<View style={styles.textRow}>
							<TcehIcons name='letter' />
							<Text style={styles.smallText}>{email}</Text>
						</View>
					</View>
					<Text style={styles.sublabel}>{description}</Text>
					<Text style={styles.fullDescription}>{fullDescription}</Text>
					<Text style={styles.sublabel}>Фото</Text>
					<PhotoStrip
						onPhotoPress={this.navigateToGalleryModal}
						photos={photos}
					/>
					<Text style={styles.sublabel}>Сотрудники</Text>
					<StaffPreview
						onPress={this.navigateToStaff}
						staff={staff}
						companyName={label}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default CompanyScreen;
