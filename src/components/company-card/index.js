// @flow
import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import TcehIcons from 'tceh-vector-icons';

type Props = {
	backgroundImage: string,
	description: string,
	industry: string,
	label: string,
	location: string,
	logoImage: string,
	office: string,
	onPress: Function,
	style: Object,
}

const CompanyCard = (props: Props) => (
	<TouchableOpacity onPress={props.onPress}>
		<View style={[styles.container, props.style]}>
			<View style={styles.innerContainer}>
				<View style={styles.backgroundImageContainer}>
					<Image
						style={styles.backgroundImage}
						source={props.backgroundImage}
						resizeMode='cover'
					/>
					<Image
						style={styles.logoImage}
						source={props.logoImage}
						resizeMode='cover'
					/>
				</View>
				<View style={styles.textContentContainer}>
					<Text style={styles.label}>{props.label}</Text>
					<Text style={styles.industry}>{props.industry}</Text>
					<Text style={styles.description}>{props.description}</Text>
					<View style={styles.row}>
						<View style={styles.row}>
							<TcehIcons name='map-marker' />
							<Text style={styles.text}>{props.location}</Text>
						</View>
						<View style={styles.row}>
							<TcehIcons name='table' />
							<Text style={styles.text}>{props.office}</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	</TouchableOpacity>
);

CompanyCard.defaultProps = {
};

export default CompanyCard;
