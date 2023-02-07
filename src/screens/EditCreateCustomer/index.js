import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NewCustomer from '../../features/NewCustomer'

const EditCreateCustomer = () => {
	const { navigate } = useNavigation()
    return (
        <View>
			<NewCustomer />
        </View>
    )
}

export default EditCreateCustomer