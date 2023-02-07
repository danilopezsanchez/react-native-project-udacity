import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ListCustomers = () => {
	const { navigate } = useNavigation()
    return (
        <View>
            <Text>{'Welcome to ListAreas'}</Text>
			<TouchableOpacity 
				onPress={() => {
				navigate('CustomerDetail')
				}}
			>
				<Text>Customer detail</Text>
			</TouchableOpacity>
        </View>
    )
}

export default ListCustomers