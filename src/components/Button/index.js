import stylesFn from './styles'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
	const styles = stylesFn();
	const { linkActionFunction, textButton } = props;

	return(
		<TouchableOpacity 
				onPress={linkActionFunction}
				style={styles.cta}
			>
				<Text style={styles.buttonText}>{textButton}</Text>
			</TouchableOpacity>
	)
}

export default Button;