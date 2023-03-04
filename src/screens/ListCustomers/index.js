import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomerInfo from '../../components/CustomerInfo'
import { useSelector } from "react-redux";


const ListCustomers = (props) => {
	
	const { navigate } = useNavigation()
	const areaSelected = props.route.params.area;
	let customers = useSelector(state => state.customer.list.customers);
	customers = customers.filter((item) => {
		return item.area === areaSelected;
	})

	const handleClickCustomer = (user) => {
		navigate('EditCreateCustomer', {user})
	}

    return (
		<SafeAreaView>
    	<ScrollView>
        <View>
			{
				customers && customers.map((item) => {
					return(
					<CustomerInfo
					key={item.id}
					name={item.name}
					lastName={item.lastname}
					status={item.active}
					area={item.area}
					linkActionFunction={() => handleClickCustomer(item)}
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