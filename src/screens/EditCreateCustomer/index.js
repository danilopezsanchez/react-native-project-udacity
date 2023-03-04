import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import Form from '../../features/Form'
import { SUCCESS } from '../../utilities/helpers';
import { useNavigation } from '@react-navigation/native'
import { useResetCustomerStatus } from '../../features/Form/hooks';
import Button from '../../components/Button';

const EditCreateCustomer = (props) => {
	const userSelected = props.route.params?.user;
	const statusCreation = useSelector(state => state.customer.create.status);
	const statusEdition = useSelector(state => state.customer.edit.status);
	const { onSubmit } = useResetCustomerStatus();
	const { navigate } = useNavigation()

	const handleContinue = () =>{
		onSubmit();
		navigate('ListAreas');
	}
	
    return (
        <View>
			{
				(statusCreation !== SUCCESS && statusEdition !== SUCCESS) && 
				<Form userEdition={userSelected} />
			}
			{
				(statusCreation === SUCCESS || statusEdition === SUCCESS) && (
				<View>
					<Text>{statusCreation === SUCCESS ? 'Customer created succesfully!' : ''}</Text>
					<Text>{statusEdition === SUCCESS ? 'Customer edited succesfully!' : ''}</Text>
					<Button linkActionFunction={handleContinue} textButton='Accept' />
				</View>
				)
			}
        </View>
    )
}

export default EditCreateCustomer