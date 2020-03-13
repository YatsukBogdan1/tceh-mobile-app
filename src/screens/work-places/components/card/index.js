// @flow
import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import baseStyles from 'components/base/styles';
import {
	SINGLE_WORK_PLACE_TYPES_ICONS,
	SINGLE_WORK_PLACE_TYPES_LABELS,
	WORK_PLACES_CATEGORIES,
} from 'constants/work-places';
import TcehIcons from 'tceh-vector-icons';

type Props = {
	capacity: string,
	imageURI: string,
	label: string,
	liked: boolean,
	onLikePress: () => void,
	onPress: () => void,
	price: number,
	square: number,
	subtype: string,
	type: string,
}

class Card extends React.Component<Props> {
	renderTextContent = () => {
		if (this.props.type === WORK_PLACES_CATEGORIES.OFFICE) {
			return (
				<React.Fragment>
					<View style={styles.textRowContainerWithMargin}>
						<View style={styles.textRow}>
							<Text style={styles.label}>{this.props.label}</Text>
						</View>
						<View style={styles.textRow}>
							<TcehIcons
								size={22}
								name='person'
								style={styles.icon}
							/>
							<Text style={styles.text}>{this.props.capacity} мест</Text>
						</View>
					</View>
					<View style={styles.textRowContainer}>
						<View style={styles.textRow}>
							<Text style={styles.text}>${this.props.price}</Text>
						</View>
						<View style={styles.textRow}>
							<TcehIcons
								size={15}
								name='square'
								style={styles.icon}
							/>
							<Text style={styles.text}>{this.props.square} м^2</Text>
						</View>
					</View>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<View style={styles.textRowContainerWithMargin}>
					<View style={styles.textRow}>
						<Text style={styles.label}>{this.props.label}</Text>
					</View>
				</View>
				<View style={styles.textRowContainer}>
					<View style={styles.textRow}>
						<Text style={styles.text}>${this.props.price}</Text>
					</View>
					<View style={styles.textRow}>
						<TcehIcons
							size={15}
							name={SINGLE_WORK_PLACE_TYPES_ICONS[this.props.subtype]}
							style={styles.icon}
						/>
						<Text style={styles.text}>{SINGLE_WORK_PLACE_TYPES_LABELS[this.props.subtype]}</Text>
					</View>
				</View>
			</React.Fragment>
		);
	};

	render() {
		const {
			imageURI,
		} = this.props;

		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<View style={baseStyles.shadowBox}>
					<View style={styles.container}>
						<Image
							source={imageURI}
							style={styles.image}
						/>
						<View style={styles.textContainer}>
							{this.renderTextContent()}
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
};

export default Card;
