import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import stylesFn from './styles'
import Button from '../../components/Button'

const ListAreas = () => {
	const styles = stylesFn();
	const { navigate } = useNavigation()

	const handleNavigationArea = (area) => {
		console.log(area)
		navigate('ListCustomers', {area});
	}

	const handleCreateCustomer = () => {
		navigate('EditCreateCustomer');
	}

    return (
        <View style={styles.content}>
			<Button linkActionFunction={handleCreateCustomer} textButton='Create customer' />
            <Text>{'List of Areas:'}</Text>
			<Button linkActionFunction={() => {handleNavigationArea("north")}} textButton='North customers' />
			<Button linkActionFunction={() => {handleNavigationArea("west")}} textButton='West customers' />
			<Button linkActionFunction={() => {handleNavigationArea("south")}} textButton='South customers' />
			<Button linkActionFunction={() => {handleNavigationArea("east")}} textButton='East customers' />
			
        </View>
    )
}

export default ListAreas