// @flow
import React from 'react';
import {
	ActivityIndicator,
	Animated,
	Dimensions, Keyboard,
	LayoutAnimation,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import { COLORS } from 'theme';
import CustomTextInput from '../../../../components/custom-text-input';
import CustomButton from '../../../../components/custom-button';

const { height } = Dimensions.get('window');

type Props = {
	close: () => void,
}

class TourRequestModal extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			innerContainerTranslateY: new Animated.Value(height),
			backdropOpacity: new Animated.Value(0),

			requestPending: false,
			requestSent: false,

			nameValue: '',
			nameError: null,
			namePristine: true,

			phoneValue: '',
			phoneError: null,
			phonePristine: true,

			commentValue: '',
			keyboardVisible: false,
		};
	}

	componentDidMount() {
		Animated.parallel([
			Animated.timing(this.state.backdropOpacity, { toValue: 0.5, duration: 200 }),
			Animated.timing(this.state.innerContainerTranslateY, { toValue: 0, duration: 200 }),
		]).start();
		this.keyboardWillShowListener = Keyboard.addListener(
			'keyboardWillShow',
			this._keyboardWillShow,
		);
		this.keyboardWillHideListener = Keyboard.addListener(
			'keyboardWillHide',
			this._keyboardWillHide,
		);
	}

	componentWillUnmount() {
		this.keyboardWillShowListener.remove();
		this.keyboardWillHideListener.remove();
	}

	_keyboardWillShow = () => {
		this.setState({ keyboardVisible: true });
		Animated.timing(this.state.innerContainerTranslateY, { toValue: -150, duration: 200 }).start();
	}

	_keyboardWillHide = () => {
		this.setState({ keyboardVisible: false });
		Animated.timing(this.state.innerContainerTranslateY, { toValue: 0, duration: 200 }).start();
	}

	onBackdropPress = () => {
		if (this.state.keyboardVisible) {
			Keyboard.dismiss();
			return;
		}
		this.close();
	};

	close = () => {
		Animated.parallel([
			Animated.timing(this.state.backdropOpacity, { toValue: 0, duration: 200 }),
			Animated.timing(this.state.innerContainerTranslateY, { toValue: height, duration: 200 }),
		]).start(() => this.props.close());
	};

	onNameChange = value => this.setState({ nameValue: value });
	onPhoneChange = value => this.setState({ phoneValue: value });
	onCommentChange = value => this.setState({ commentValue: value });

	get backdropStyle () {
		return [
			styles.backdrop,
			{
				opacity: this.state.backdropOpacity,
			},
		];
	}

	get innerContainerStyle () {
		return [
			styles.innerContainer,
			{
				transform: [{
					translateY: this.state.innerContainerTranslateY,
				}],
			},
		];
	}

	requestTour = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ requestPending: true });
		setTimeout(() => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			this.setState({
				requestPending: false,
				requestSent: true,
			});
		}, 1000);
	};

	renderContent = () => {
		if (this.state.requestPending) {
			return (
				<ActivityIndicator color={COLORS.MAIN_ORANGE_COLOR} size='large'/>
			);
		}
		if (this.state.requestSent) {
			return (
				<View>
					<Text style={styles.header}>Заявка отправлена</Text>
					<Text style={styles.text}>Ваша заявка успешно отправлена. Наш менеджер свяжется с вами.</Text>
					<CustomButton
						label='ОК'
						onPress={this.close}
					/>
				</View>
			);
		}
		return (
			<View>
				<Text style={styles.header}>Заявка на тур</Text>
				<Text style={styles.text}>Оставьте заявку и наш менеджер свяжется с Вами!</Text>
				<CustomTextInput
					onChange={this.onNameChange}
					value={this.state.nameValue}
					label='Имя'
					onSubmitEditing={() => this.phoneInput.focus()}
				/>
				<CustomTextInput
					ref={_ref => this.phoneInput = _ref}
					onSubmitEditing={() => this.commentInput.focus()}
					onChange={this.onPhoneChange}
					value={this.state.phoneValue}
					label='Телефон'
				/>
				<CustomTextInput
					ref={_ref => this.commentInput = _ref}
					onChange={this.onCommentChange}
					value={this.state.commentValue}
					label='Коментарий'
				/>
				<CustomButton
					label='Отправить'
					onPress={this.requestTour}
				/>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<Animated.View style={this.backdropStyle} />
				<TouchableOpacity
					onPress={this.onBackdropPress}
					style={styles.touchableAreaContainer}
				>
					<View style={styles.touchableAreaView} />
				</TouchableOpacity>
				<Animated.View style={this.innerContainerStyle}>
					{this.renderContent()}
				</Animated.View>
			</View>
		);
	}
}

export default TourRequestModal;
