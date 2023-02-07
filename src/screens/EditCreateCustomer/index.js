import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const EditCustomer = () => {
	const { navigate } = useNavigation()
    return (
        <View>
            <Text>{'Welcome to Customer Detail'}</Text>
			<TouchableOpacity 
				onPress={() => {
				navigate('ListCustomers')
				}}
			>
				<Text>Update</Text>
			</TouchableOpacity>
        </View>
    )
}

export default EditCustomer