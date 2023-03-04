import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import stylesFn from './styles'
import Button from '../../components/Button'

const Welcome = () => {
	const styles = stylesFn();

	const { navigate } = useNavigation()

	const handleContinue = () =>{
		navigate('ListAreas')
	}

	const handleClear = () => {
		alert("Cleaned!");
	}

    return (
        <View style={styles.content}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>
			<Button linkActionFunction={handleContinue} textButton='Continue to app' />
			<Button linkActionFunction={handleClear} textButton='Clear storage' />
        </View>
    )
}

export default Welcome