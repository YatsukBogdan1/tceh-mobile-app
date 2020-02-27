import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';

type Props = {
	imageURI: string,
	label: string,
	onPress: () => void,
	description: string,
	type?: string,
}

class TouchableCard extends React.Component<Props> {
	render() {
		return (
			<View style={styles.outerContainer}>
				<TouchableOpacity style={styles.container}>
					<Image
						source={this.props.imageURI}
						resizeMode='contain'
						style={styles.image}
					/>
					<View style={styles.textContainer}>
						<Text style={styles.label}>{this.props.label}</Text>
						<Text style={styles.description}>{this.props.description}</Text>
						{this.props.type && <Text style={styles.type}>{this.props.type}</Text>}
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

TouchableCard.defaultProps = {
	type: null,
};

export default TouchableCard;
