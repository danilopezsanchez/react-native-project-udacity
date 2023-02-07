import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomerInfo from '../../components/CustomerInfo'

const ListCustomers = () => {
	const { navigate } = useNavigation()
	const tempArray = [
		{
			'customerID': 123423423,
			'name':'Pepe',
			'lastName':'Sanchez',
			'status':'active',
			'area':'North'
		},
		{
			'customerID': 222222,
			'name':'Michael',
			'lastName':'Scott',
			'status':'active',
			'area':'North'
		},
		{
			'customerID': 33333,
			'name':'Dunder',
			'lastName':'Mifflin',
			'status':'inactive',
			'area':'North'
		},
		{
			'customerID': 444444,
			'name':'Pam',
			'lastName':'Beasly',
			'status':'active',
			'area':'South'
		},
		{
			'customerID': 444444,
			'name':'Pam',
			'lastName':'Beasly',
			'status':'active',
			'area':'South'
		},
		{
			'customerID': 444444,
			'name':'Pam',
			'lastName':'Beasly',
			'status':'active',
			'area':'South'
		},
		{
			'customerID': 444444,
			'name':'Pam',
			'lastName':'Beasly',
			'status':'active',
			'area':'South'
		},
		{
			'customerID': 444444,
			'name':'Pam',
			'lastName':'Beasly',
			'status':'active',
			'area':'South'
		},
		{
			'customerID': 444444,
			'name':'Pam',
			'lastName':'Beasly',
			'status':'active',
			'area':'South'
		},
		{
			'customerID': 444444,
			'name':'Pam',
			'lastName':'Beasly',
			'status':'active',
			'area':'South'
		},
		{
			'customerID': 444444,
			'name':'Pam',
			'lastName':'Beasly',
			'status':'active',
			'area':'South'
		},
	]

	const handleClickCustomer = () => {
		navigate('EditCreateCustomer')
	}

    return (
		<SafeAreaView>
    	<ScrollView>
        <View>
            <Text>{'List of customers'}</Text>
			{
				tempArray.map((item) => {
					return(
					<CustomerInfo
					key={item.customerID}
					name={item.name}
					lastName={item.lastName}
					status={item.status}
					area={item.area}
					linkActionFunction={handleClickCustomer}
					/>
					)
				})
			}
			
        </View>
		</ScrollView>
		</SafeAreaView>
    )
}

export default ListCustomers