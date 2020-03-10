// @flow

import React from 'react';
import {
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import styles from './styles';
import Header from '../../components/header';
import Footer from 'components/footer';
import * as SCREENS from 'constants/screens';

type Props = {
	gallery: Array<Object>,
};

class Gallery extends React.Component<Props> {
	navigateToGalleryModal = index => {
		Navigation.showModal({
			component: {
				name: SCREENS.LOCATION_GALLERY_MODAL_SCREEN,
				passProps: {
					initialIndex: index,
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

	onBackPress = () => Navigation.pop(this.props.componentId);

	render() {
		return (
			<View style={styles.container}>
				<Header
					borderVisible={false}
					heartActive
					onBackPress={this.onBackPress}
					onHeartPress={() => false}
					underlayVisible
				/>
				<ScrollView
					style={styles.scrollView}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewContentContainer}
				>
					{this.props.gallery.map(item => (
						<React.Fragment>
							<Text style={styles.label}>{item.name}</Text>
							<Text style={styles.text}>{item.description}</Text>
							{item.photos.map(photoItem => (
								<React.Fragment>
									<TouchableOpacity onPress={() => this.navigateToGalleryModal(photoItem.galleryIndex)}>
										<Image
											source={photoItem.photo}
											resizeMode='contain'
											style={styles.image}
										/>
									</TouchableOpacity>
									<View style={styles.imageListDivider} />
								</React.Fragment>
							))}
						</React.Fragment>
					))}
				</ScrollView>
				<Footer
					linkLabel='Связаться с нами'
					onLinkPress={() => false}
					buttonLabel='Подбор офиса'
					onButtonPress={this.navigateToWorkplaces}
				/>
			</View>
		);
	}
}

export default Gallery;
