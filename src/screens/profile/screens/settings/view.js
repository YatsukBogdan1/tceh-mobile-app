import React from 'react';
import {
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import type { UserSettings } from 'flow/types';
import { Navigation } from 'react-native-navigation';
import SwitchItem from './components/switch-item';
import CustomSelect from 'components/custom-select';
import LinkButton from 'components/link-button';
import * as SCREENS from 'constants/screens';

type Props = {
	onSettingChange: (field: string, value: any) => void,
	settings: UserSettings,
}

class SavedScreen extends React.Component<Props> {
	onBackPress = () => Navigation.pop(this.props.componentId);

	get languageOptions () {
		return [{
			text: 'Русский',
			value: 'ru',
		}];
	}

	navigateToPasswordChange = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.CHANGE_PASSWORD,
			},
		});
	};

	render() {
		const {
			settings,
			onSettingChange,
		} = this.props;

		const {
			benefitsNotificationsEnabled,
			language,
			meetingRoomNotificationsEnabled,
			newCompanyNotificationEnabled,
			newPostNotificationsEnabled,
			socialNotificationsEnabled,
		} = settings;

		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={this.onBackPress}
				>
					<IonIcon
						name='ios-arrow-back'
						size={30}
					/>
				</TouchableOpacity>
				<Text style={styles.label}>Настройки</Text>
				<ScrollView style={styles.scrollView}>
					<Text style={styles.notificationsLabel}>УВЕДОМЛЕНИЯ</Text>
					<SwitchItem
						label='Бронь переговорной'
						onChange={() => onSettingChange('meetingRoomNotificationsEnabled', !meetingRoomNotificationsEnabled)}
						value={meetingRoomNotificationsEnabled}
					/>
					<View style={styles.divider} />
					<SwitchItem
						label='Комментарии, лайки и добавление постов в избранные'
						onChange={() => onSettingChange('socialNotificationsEnabled', !socialNotificationsEnabled)}
						value={socialNotificationsEnabled}
					/>
					<View style={styles.divider} />
					<SwitchItem
						label='Акции и бонусы'
						onChange={() => onSettingChange('benefitsNotificationsEnabled', !benefitsNotificationsEnabled)}
						value={benefitsNotificationsEnabled}
					/>
					<View style={styles.divider} />
					<SwitchItem
						label='Добавлен новый пост, статья, новость, мероприятие'
						onChange={() => onSettingChange('newPostNotificationsEnabled', !newPostNotificationsEnabled)}
						value={newPostNotificationsEnabled}
					/>
					<View style={styles.divider} />
					<SwitchItem
						label='Добавлена новая компания'
						onChange={() => onSettingChange('newCompanyNotificationEnabled', !newCompanyNotificationEnabled)}
						value={newCompanyNotificationEnabled}
					/>
					<View style={styles.divider} />
					<View style={styles.bigDivider} />
					<CustomSelect
						label='Язык'
						onChange={value => onSettingChange('language', value)}
						options={this.languageOptions}
						value={language}
					/>
					<LinkButton
						label='Изменить пароль'
						onPress={this.navigateToPasswordChange}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default SavedScreen;
