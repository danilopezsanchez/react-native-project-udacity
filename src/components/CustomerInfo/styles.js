import { StyleSheet } from 'react-native'

const stylesFn = () => {

	const styles = {

		customerContainer: {
			borderWidth: 1,
			borderColor: 'grey',
			margin: 10,
			padding: 20,
			fontSize: 18,
		}
	}

	return StyleSheet.create(styles);
}

export default stylesFn