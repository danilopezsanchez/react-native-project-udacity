
import { View, Text, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useNewCustomer, useUpdateFields, useEditCustomer } from './hooks'
import stylesFn from './styles'
import Button from '../../components/Button'
import { useState } from 'react'

const Form = (props) => {
	let customerID = null;
	if(props.userEdition?.id)
		customerID = props.userEdition?.id
	const { fields, setFormField } = useUpdateFields(customerID);
	const styles = stylesFn();
	const { onSubmit } = useNewCustomer();
	const { onSubmitEdit } = useEditCustomer();
	const isEdition = props.userEdition !== undefined;

	const {
		name,
		lastname,
		active,
		area,
	} = fields;
	console.log("areaaaa:", area)
	console.log("activeeee:", active)

	//const [selectedValue, setSelectedValue] = useState("java");

	return (
		<View style={styles.container}>
			<Text style={styles.textField}>{'Name'}</Text>
			<TextInput
				key={'name'}
				placeholder='Name'
				value={name || ''}
				onChangeText={v => setFormField('name', v)}
				style={styles.inputField}
			/>

			<Text style={styles.textField}>{'Lastname'}</Text>
			<TextInput
				key={'lastname'}
				placeholder='Lastname'
				value={lastname || ''}
				style={styles.inputField}
				onChangeText={v => setFormField('lastname', v)}
			/>

			<Text style={styles.textField}>{'Active:'}</Text>
			<View style={styles.selectField}>
				<Picker
					selectedValue={active || setFormField('active', true)}
					onValueChange={v => setFormField('active', v)}
				>
					<Picker.Item label="Active" value="true" />
					<Picker.Item label="Inactive" value="false" />
				</Picker>
			</View>

			<Text style={styles.textField}>{'Area:'}</Text>
			<View style={styles.selectField}>
				<Picker
					selectedValue={area || setFormField('area', 'north')}
					onValueChange={v => setFormField('area', v)}
				>
					<Picker.Item label="North" value="north" />
					<Picker.Item label="West" value="west" />
					<Picker.Item label="South" value="south" />
					<Picker.Item label="East" value="east" />
				</Picker>
			</View>

			{isEdition===true ? 
			<Button linkActionFunction={ () => { onSubmitEdit(customerID) } } textButton='Edit customer info' />:
			<Button linkActionFunction={ onSubmit } textButton='Save customer' />}
		</View>
	)
}

export default Form;