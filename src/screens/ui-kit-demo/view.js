import React from 'react';
import { Text, ScrollView, Slider } from 'react-native';
import styles from './styles';
import CustomButton from 'components/custom-button';
import CustomSelect from 'components/custom-select';
import CustomSwitch from 'components/custom-switch';
import CustomTextInput from 'components/custom-text-input';
import Footer from 'components/footer';
import BottomTabBar from 'components/bottom-tab-bar';
import CustomMultiSlider from 'components/custom-slider';

class UIKitDemo extends React.Component {
	state = {
		inputValue: '',
		inputError: null,

		inputValue2: '',
		inputError2: null,

		selectValue: null,

		switchValue: false,

		sliderValue: 10,
		multiSliderValues: [10, 50],
	};

	onInputValueChange = value => this.setState({ inputValue: value }, this.validateInputValue);
	onInputValue2Change = value => this.setState({ inputValue2: value }, this.validateInput2Value);
	onSelectValueChange = value => this.setState({ selectValue: value });
	onSwitchValueChange = value => this.setState({ switchValue: value });
	onSliderValueChange = value => this.setState({ sliderValue: value });
	onMultiSliderValuesChange = values => this.setState({ multiSliderValues: values });
	validateInputValue = async () => {
		if (this.state.inputValue.length === 0) {
			return this.setState({ inputError: 'Please enter field value' });
		}
		return this.setState({ inputError: null });
	};

	validateInput2Value = async () => {
		if (this.state.inputValue2.length === 0) {
			return this.setState({ inputError2: 'Please enter field value' });
		}
		return this.setState({ inputError2: null });
	};

	render() {
		return (
			<ScrollView scrollEnabled={false} keyboardShouldPersistTaps='never' style={styles.container}>
				<Text style={styles.mainHeaderText}>UI Kit Demo Screen</Text>
				<Text style={styles.subheaderText}>Custom Slider</Text>
				<Text style={styles.componentText}>Left Value: {this.state.multiSliderValues[0]}</Text>
				<Text style={styles.componentText}>Right Value: {this.state.multiSliderValues[1]}</Text>
				<CustomMultiSlider
					minValue={0}
					maxValue={100}
					onChange={this.onMultiSliderValuesChange}
					values={this.state.multiSliderValues}
				/>
				<Text style={styles.subheaderText}>Bottom Tab Bar</Text>
				<BottomTabBar />
				<Text style={styles.subheaderText}>Footer</Text>
				<Footer
					linkLabel='Link label'
					onLinkPress={() => false}
					buttonLabel='Button label'
					onButtonPress={() => false}
				/>
				<Text style={styles.subheaderText}>Switch</Text>
				<CustomSwitch
					onValueChange={this.onSwitchValueChange}
					value={this.state.switchValue}
				/>
				<Text style={styles.subheaderText}>Input Outlined</Text>
				<CustomTextInput
					outlined
					error={this.state.inputError2}
					label='Input 2 label'
					onChange={this.onInputValue2Change}
					value={this.state.inputValue2}
				/>
				<Text style={styles.subheaderText}>Input</Text>
				<CustomTextInput
					outlined={false}
					error={this.state.inputError}
					label='Input label'
					onChange={this.onInputValueChange}
					value={this.state.inputValue}
				/>
				<Text style={styles.subheaderText}>Select Outlined</Text>
				<CustomSelect
					outlined
					options={[{
						value: '1',
						text: 'text1',
					},{
						value: '2',
						text: 'text2',
					}]}
					label='Select label'
					onChange={this.onSelectValueChange}
					value={this.state.selectValue}
				/>
				<Text style={styles.subheaderText}>Select</Text>
				<CustomSelect
					outlined={false}
					options={[{
						value: '1',
						text: 'text1',
					},{
						value: '2',
						text: 'text2',
					}]}
					label='Select label'
					onChange={this.onSelectValueChange}
					value={this.state.selectValue}
				/>
				<Text style={styles.subheaderText}>Button</Text>
				<CustomButton
					label='Button enabled'
					onPress={() => false}
					containerStyle={{ marginBottom: 20 }}
				/>
				<Text style={styles.subheaderText}>Button Disabled</Text>
				<CustomButton
					disabled
					label='Button disabled'
					onPress={() => false}
					containerStyle={{ marginBottom: 20 }}
				/>
				<Text style={styles.subheaderText}>Button Outlined</Text>
				<CustomButton
					outlined
					label='Button outlined'
					onPress={() => false}
					containerStyle={{ marginBottom: 20 }}
				/>
			</ScrollView>
		);
	}
}

export default UIKitDemo;
