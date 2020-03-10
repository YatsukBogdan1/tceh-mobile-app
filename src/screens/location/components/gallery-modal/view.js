// @flow
import React from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Navigation } from 'react-native-navigation';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from 'theme';

type Props = {
	initialIndex: number,
	gallery: Array<Object>,
}

class GalleryModal extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.album = React.createRef();
	}

	get photos () {
		return this.props.gallery.reduce((photos, item) => [...photos, ...item.photos.map(photoItem => ({
			label: item.name,
			photo: photoItem.photo,
		}))], []);
	}

	// get label () {
	// 	if (this.album && this.album.current) {
	// 		const { state } = this.album.current;
	// 		return this.photos[state.index].label;
	// 	}
	// }

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.closeButton}
					onPress={() => Navigation.dismissModal(this.props.componentId)}
				>
					<Ionicons
						name='ios-close'
						size={40}
						color={COLORS.BLACK}
					/>
				</TouchableOpacity>
				<Swiper
					index={this.props.initialIndex}
					ref={this.album}
					showsPagination={false}
				>
					{this.photos.map(item => (
						<View style={styles.imageContainer}>
							<Image
								source={item.photo}
								style={styles.image}
							/>
							<Text style={styles.label}>{item.label}</Text>
						</View>
					))}
				</Swiper>
			</View>
		);
	}
}

export default GalleryModal;
