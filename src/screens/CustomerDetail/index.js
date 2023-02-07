import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CustomerDetail = () => {
	const { navigate } = useNavigation()
    return (
        <View>
            <Text>{'Welcome to Customer Detail'}</Text>
			<TouchableOpacity 
				onPress={() => {
				navigate('EditCreateCustomer')
				}}
			>
				<Text>Edit customer</Text>
			</TouchableOpacity>
        </View>
    )
}

export default CustomerDetail