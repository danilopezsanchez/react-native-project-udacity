import stylesFn from './styles'
import { View, Text, TouchableOpacity } from 'react-native'

const CustomerInfo = (props) => {
	const { name, lastName, status, area, linkActionFunction } = props;
	const styles = stylesFn();		
			
	return(
		<View style={styles.customerContainer}>
			<TouchableOpacity 
				onPress={linkActionFunction}
			>
				<Text> Name: {name}</Text>
				<Text> LastName: {lastName} </Text>
				<Text> Status: {status}</Text>
				<Text> Area: {area}</Text>
			</TouchableOpacity>
			
		</View>
	)

			
			
}

export default CustomerInfo;