
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNewCustomer, useUpdateFields, useEditCustomer } from './hooks'
import stylesFn from './styles'
import Button from '../../components/Button'

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

	return (
		<View style={styles.container}>

			<TextInput
				key={'name'}
				placeholder='Name'
				value={name || ''}
				onChangeText={v => setFormField('name', v)}
				style={styles.inputField}
			/>

			<TextInput
				key={'lastname'}
				placeholder='LastName'
				value={lastname || ''}
				style={styles.inputField}
				onChangeText={v => setFormField('lastname', v)}
			/>

			<TextInput
				key={'active'}
				placeholder='active'
				value={active || ''}
				style={styles.inputField}
				onChangeText={v => setFormField('active', v)}
			/>

			<TextInput
				key={'area'}
				placeholder='area'
				value={area || ''}
				style={styles.inputField}
				onChangeText={v => setFormField('area', v)}
			/>

			{isEdition ? 
			<Button linkActionFunction={ () => { onSubmitEdit(customerID) } } textButton='Edit customer info' />:
			<Button linkActionFunction={ onSubmit } textButton='Save customer' />}
		</View>
	)
}

export default Form;