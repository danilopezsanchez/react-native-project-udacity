import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
	const { navigate } = useNavigation()
    return (
        <View>
            <Text>{'Welcome to Customer Manager Plus'}</Text>
			<TouchableOpacity 
				onPress={() => {
				navigate('ListAreas')
				}}
			>
				<Text>See ListAreas</Text>
			</TouchableOpacity>
        </View>
    )
}

export default Welcome