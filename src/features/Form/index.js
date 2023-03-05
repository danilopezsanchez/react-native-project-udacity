
import { View, Text, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useNewCustomer, useUpdateFields, useEditCustomer } from './hooks'
import stylesFn from './styles'
import Button from '../../components/Button'
import { useEffect } from 'react'

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
		reminder,
	} = fields;

	useEffect(()=>{
		if(!customerID){
			setFormField('active', 'true')
			setFormField('area', 'north')
			setFormField('reminder', 'false')
		}
	}, [])
	

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
					selectedValue={active}
					onValueChange={v => setFormField('active', v)}
				>
					<Picker.Item label="Active" value="true" />
					<Picker.Item label="Inactive" value="false" />
				</Picker>
			</View>

			<Text style={styles.textField}>{'Area:'}</Text>
			<View style={styles.selectField}>
				<Picker
					selectedValue={area}
					onValueChange={v => setFormField('area', v)}
				>
					<Picker.Item label="North" value="north" />
					<Picker.Item label="West" value="west" />
					<Picker.Item label="South" value="south" />
					<Picker.Item label="East" value="east" />
				</Picker>
			</View>

			<Text style={styles.textField}>{'Call reminder (test: 10 sec):'}</Text>
			<View style={styles.selectField}>
				<Picker
					selectedValue={reminder}
					onValueChange={v => setFormField('reminder', v)}
				>
					<Picker.Item label="No" value="false" />
					<Picker.Item label="Yes" value="true" />
				</Picker>
			</View>

			{isEdition===true ? 
			<Button linkActionFunction={ () => { onSubmitEdit(customerID) } } textButton='Edit customer info' />:
			<Button linkActionFunction={ onSubmit } textButton='Save customer' />}
		</View>
	)
}

export default Form;