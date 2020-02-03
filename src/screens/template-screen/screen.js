import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './styles';

class ScreenName extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Appsider boilerplate app</Text>
			</SafeAreaView>
		);
	}
}

export default ScreenName;
