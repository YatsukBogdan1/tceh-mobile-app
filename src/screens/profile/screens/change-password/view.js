import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import type { UserSettings } from 'flow/types';
import { Navigation } from 'react-native-navigation';
import LinkButton from 'components/link-button';
import CustomTextInput from 'components/custom-text-input';

type Props = {
	onSettingChange: (field: string, value: any) => void,
	settings: UserSettings,
}

class ChangePasswordScreen extends React.Component<Props> {
	state = {
		oldPasswordValue: '',
		oldPasswordError: null,
		oldPasswordPristine: true,

		newPasswordValue: '',
		newPasswordError: null,
		newPasswordPristine: true,
	};

	onOldPasswordChange = (value) => this.setState({ oldPasswordValue: value });
	onNewPasswordChange = (value) => this.setState({ newPasswordValue: value });

	onOldPasswordBlur = () => this.setState({ oldPasswordPristine: false });
	onNewPasswordBlur = () => this.setState({ newPasswordPristine: false });

	onBackPress = () => Navigation.pop(this.props.componentId);

	render() {
		const {
			oldPasswordError,
			oldPasswordPristine,
			oldPasswordValue,

			newPasswordError,
			newPasswordPristine,
			newPasswordValue,
		} = this.state;

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
				<Text style={styles.label}>Изменить пароль</Text>
				<View style={styles.contentContainer}>
					<CustomTextInput
						error={!oldPasswordPristine && oldPasswordError}
						label='Текущий пароль'
						onBlur={this.onOldPasswordBlur}
						onChange={this.onOldPasswordChange}
						onSubmitEditing={() => this.newPasswordInput.focus()}
						returnKeyType='next'
						value={oldPasswordValue}
						secureTextEntry
					/>
					<CustomTextInput
						error={!newPasswordPristine && newPasswordError}
						label='Новый пароль'
						ref={_ref => this.newPasswordInput = _ref}
						secureTextEntry
						onBlur={this.onNewPasswordBlur}
						onChange={this.onNewPasswordChange}
						returnKeyType='done'
						value={newPasswordValue}
					/>
					<LinkButton
						label='Сохранить'
						textStyle={styles.linkTextStyle}
						onPress={this.onBackPress}
					/>
				</View>
			</View>
		);
	}
}

export default ChangePasswordScreen;
