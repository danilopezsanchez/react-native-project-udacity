import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import stylesFn from './styles'

const Welcome = () => {
	const styles = stylesFn();

	const { navigate } = useNavigation()
    return (
        <View style={styles.content}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>
			<TouchableOpacity 
				onPress={() => {
				navigate('ListAreas')
				}}
				style={styles.cta}
			>
				<Text style={styles.buttonText}>Continue to app</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				onPress={() => {
				alert("Clean!")
				}}
				style={styles.cta}
			>
				<Text style={styles.buttonText}>Clear storage</Text>
			</TouchableOpacity>
        </View>
    )
}

export default Welcome