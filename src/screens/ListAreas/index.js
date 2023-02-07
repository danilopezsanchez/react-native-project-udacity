import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ListAreas = () => {
	const { navigate } = useNavigation()
    return (
        <View>
            <Text>{'Welcome to ListAreas'}</Text>
			<TouchableOpacity 
				onPress={() => {
				navigate('ListCustomers')
				}}
			>
				<Text>See ListCustomers</Text>
			</TouchableOpacity>
        </View>
    )
}

export default ListAreas