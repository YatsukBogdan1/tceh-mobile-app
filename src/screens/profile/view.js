import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import UserBlock from './components/user-block';

class ProfileScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<UserBlock
					avatarURI='some-uri'
					name='Антонина Ковальчук'
					position='Brand Manager'
				/>
			</View>
		);
	}
}

export default ProfileScreen;
