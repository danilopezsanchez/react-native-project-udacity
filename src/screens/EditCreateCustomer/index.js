import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NewCustomer from '../../features/NewCustomer'

const EditCreateCustomer = () => {
	const { navigate } = useNavigation()
    return (
        <View>
            <Text>{'Welcome to Customer Detail'}</Text>
			<NewCustomer />
        </View>
    )
}

export default EditCreateCustomer