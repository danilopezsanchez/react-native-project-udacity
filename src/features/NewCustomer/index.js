
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useUpdateFields } from '../hooks'
import stylesFn from './styles'
import Button from '../../components/Button'

const NewCustomer = () => {

	const { fields, setFormField } = useUpdateFields()
	const styles = stylesFn();

	const {
		name,
		lastname,
		active,
		area
	} = fields;

	return (
		<View style={styles.container}>
			<View style={styles.form}></View>

			<TextInput
				key={'name'}
				placeholder='Name'
				value={name}
				onChangeText={v => setFormField('name', v)}
				style={styles.inputField}
			/>

			<TextInput
				key={'lastname'}
				placeholder='LastName'
				value={lastname}
				style={styles.inputField}
				onChangeText={v => setFormField('lastname', v)}
			/>

			<TextInput
				key={'active'}
				placeholder='active'
				value={active}
				style={styles.inputField}
				onChangeText={v => setFormField('active', v)}
			/>

			<TextInput
				key={'area'}
				placeholder='area'
				value={area}
				style={styles.inputField}
				onChangeText={v => setFormField('area', v)}
			/>

			<Button linkActionFunction={() => (alert("submit"))} textButton='Submit' />
		</View>
	)
}

export default NewCustomer;