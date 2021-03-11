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
import {
	WORK_PLACES_CATEGORIES,
	WORK_PLACES_OPTIONS,
} from 'constants/work-places';
import CustomFilterSlider from 'components/custom-filter-slider';
import CustomRadioButton from 'components/radio-button';

class WorkPlacesFilters extends React.Component {
	onBackPress = () => Navigation.pop(this.props.componentId);

	onLocationChange = id => this.props.setFilter('locationId', id);
	onTypeChange = type => this.props.setFilter('type', type);
	onCapacityChange = value => this.props.setFilter('capacity', value);
	onPriceChange = value => this.props.setFilter('price', value);
	onWindowsChange = value => this.props.setFilter('windows', value);

	render() {
		const {
			capacity,
			locationId,
			price,
			type,
			windows,
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
							options={WORK_PLACES_OPTIONS}
						/>
						{type === WORK_PLACES_CATEGORIES.OFFICE && (
							<CustomFilterSlider
								step={1}
								label='Количество мест'
								maxValue={20}
								minValue={2}
								onChange={this.onCapacityChange}
								value={capacity}
								valuePrefix='до'
								valueSuffix='мест'
							/>
						)}
						<View style={styles.radioContainer}>
							<Text style={styles.text}>Видовые окна</Text>
							<View style={styles.radioGroupContainer}>
								<View style={styles.radioWithText}>
									<CustomRadioButton
										checked={windows}
										value={true}
										onPress={() => this.onWindowsChange(true)}
									/>
									<Text style={styles.radioText}>есть</Text>
								</View>
								<View style={styles.radioWithText}>
									<CustomRadioButton
										checked={!windows}
										value={false}
										onPress={() => this.onWindowsChange(false)}
									/>
									<Text style={styles.radioText}>нет</Text>
								</View>
							</View>
						</View>
						<CustomFilterSlider
							step={50}
							label='Стоимость в месяц'
							maxValue={7000}
							minValue={1000}
							onChange={this.onPriceChange}
							value={price}
							valuePrefix='до'
							valueSuffix='$'
						/>
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

export default WorkPlacesFilters;
