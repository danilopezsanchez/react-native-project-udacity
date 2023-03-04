import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import NewCustomer from '../../features/NewCustomer'

const EditCreateCustomer = (props) => {
	const userSelected = props.route.params?.user;
	console.log(userSelected)
    return (
        <View>
			<NewCustomer userEdition={userSelected} />
        </View>
    )
}

export default EditCreateCustomer