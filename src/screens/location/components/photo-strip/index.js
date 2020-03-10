// @flow
import React from 'react';
import {
	FlatList,
	Image,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';

type Props = {
	onPhotoPress: (index: number) => void,
	photos: Array<Object>,
}

class PhotoStrip extends React.Component<Props> {
	renderItem = ({ item }) => (
		<TouchableOpacity onPress={() => this.props.onPhotoPress(item.galleryIndex)}>
			<Image
				style={styles.photo}
				source={item.photo}
			/>
		</TouchableOpacity>
	);

	render() {
		const { photos } = this.props;

		return (
			<FlatList
				data={photos}
				horizontal
				ItemSeparatorComponent={() => <View style={styles.divider}/>}
				renderItem={this.renderItem}
				showsHorizontalScrollIndicator={false}
				style={styles.list}
			/>
		);
	}
};

export default PhotoStrip;
