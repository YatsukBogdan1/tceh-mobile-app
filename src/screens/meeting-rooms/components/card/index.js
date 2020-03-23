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
import TcehIcons from 'tceh-vector-icons';
import CustomButton from 'components/custom-button';

type Props = {
	capacity: string,
	desk: boolean,
	flipchart: boolean,
	imageURI: string,
	label: string,
	onBookPress: () => void,
	onCalendarPress: () => void,
	projector: boolean,
	screen: boolean,
}

class Card extends React.Component<Props> {
	render() {
		const {
			capacity,
			desk,
			flipchart,
			imageURI,
			label,
			onCalendarPress,
			onBookPress,
			projector,
			screen,
		} = this.props;

		return (
			<View>
				<View style={baseStyles.shadowBox}>
					<View style={styles.container}>
						<TouchableOpacity style={styles.calendarButtonContainer} onPress={onCalendarPress}>
							<TcehIcons size={15} name='calendar'/>
						</TouchableOpacity>
						<Image
							source={imageURI}
							style={styles.image}
						/>
						<View style={styles.textContainer}>
							<View style={styles.textRowContainerWithMargin}>
								<Text style={styles.label}>{label}</Text>
								<View style={styles.textRow}>
									<TcehIcons name='chair' size={20} />
									<Text style={styles.text}>{capacity} мест</Text>
								</View>
							</View>
							<View style={styles.textRowContainer}>
								{!projector && !screen && !flipchart && !desk && <View />}
								{projector && <TcehIcons size={15} name='projector'/>}
								{screen && <TcehIcons size={15} name='screen'/>}
								{flipchart && <TcehIcons size={15} name='flipchart'/>}
								{desk && <TcehIcons size={15} name='blackboard'/>}
								<CustomButton
									style={styles.bookButton}
									label='Бронировать'
									labelStyle={styles.bookButtonText}
									onPress={onBookPress}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
};

export default Card;
