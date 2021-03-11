import React from 'react';
import {
	Text,
	TouchableOpacity,
	SafeAreaView,
	View,
} from 'react-native';
import styles from './styles';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import { Navigation } from 'react-native-navigation';
import Footer from 'components/footer';
import CustomSelect from 'components/custom-select';
import { MEETING_ROOMS_OPTIONS } from 'constants/meeting-rooms';
import CustomFilterSlider from 'components/custom-filter-slider';
import { getDateString } from 'utils';
import moment from 'moment';
import EquipmentButton from './components/equipment-button';
import DateFilterBadge from 'screens/meeting-room/components/date-filter-badge';
import TimeFilterBadge from 'screens/meeting-room/components/time-filter-badge';

class MeetingRoomsFilters extends React.Component {
	onBackPress = () => Navigation.pop(this.props.componentId);

	onLocationChange = id => this.props.setFilter('locationId', id);
	onTypeChange = type => this.props.setFilter('type', type);
	onCapacityChange = value => this.props.setFilter('capacity', value);

	onProjectorChange = () => this.props.setFilter('projector', !this.props.filters.projector);
	onScreenChange = () => this.props.setFilter('screen', !this.props.filters.screen);
	onFlipChartChange = () => this.props.setFilter('flipchart', !this.props.filters.flipchart);
	onDeskChange = () => this.props.setFilter('desk', !this.props.filters.desk);

	get dateLabel () {
		return getDateString(this.props.filters.date);
	}

	get timeLabel () {
		const {
			date,
			duration,
		} = this.props.filters;
		const dateEnd = new Date(date);
		dateEnd.setMinutes(dateEnd.getMinutes() + duration);
		return `${moment(date).format('hh:mm')}-${moment(dateEnd).format('hh:mm')}`;
	}

	render() {
		const {
			capacity,
			desk,
			flipchart,
			locationId,
			projector,
			screen,
			type,
		} = this.props.filters;

		return (
			<View style={styles.container}>
				<SafeAreaView style={styles.safeAreaContainer}>
					<View style={styles.headerContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={this.onBackPress}
						>
							<IonIcon
								name='ios-arrow-back'
								size={30}
							/>
						</TouchableOpacity>
						<Text style={styles.label}>Фильтрация</Text>
						<View style={styles.button} />
					</View>
					<View style={styles.filtersContainer}>
						<CustomSelect
							label='Локация'
							value={locationId}
							onChange={this.onLocationChange}
							options={this.props.locationsOptions}
						/>
						<CustomSelect
							label='Тип помещения'
							value={type}
							onChange={this.onTypeChange}
							options={MEETING_ROOMS_OPTIONS}
						/>
						<View style={styles.dateBadgesContainer}>
							<DateFilterBadge />
							<TimeFilterBadge />
						</View>
						<CustomFilterSlider
							step={1}
							containerStyle={styles.sliderContainer}
							label='Количество мест'
							maxValue={20}
							minValue={2}
							onChange={this.onCapacityChange}
							value={capacity}
							valuePrefix='до'
							valueSuffix='мест'
						/>
						<Text style={styles.text}>Техническое оснащение</Text>
						<View style={styles.technicalEquipmentContainer}>
							<EquipmentButton
								active={projector}
								iconName='projector'
								text='Проектор'
								onPress={this.onProjectorChange}
							/>
							<EquipmentButton
								active={screen}
								iconName='screen'
								text='Экран'
								onPress={this.onScreenChange}
							/>
							<EquipmentButton
								active={flipchart}
								iconName='flipchart'
								text='Флипчарт'
								onPress={this.onFlipChartChange}
							/>
							<EquipmentButton
								active={desk}
								iconName='blackboard'
								text='Доска'
								onPress={this.onDeskChange}
							/>
						</View>
					</View>
				</SafeAreaView>
				<Footer
					buttonLabel='Применить'
					onButtonPress={this.onBackPress}
					linkLabel='Связаться с нами'
					onLinkPress={() => false}
				/>
			</View>
		);
	}
}

export default MeetingRoomsFilters;
