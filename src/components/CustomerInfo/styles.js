import { StyleSheet } from 'react-native'

const stylesFn = () => {

	const styles = {

		customerContainer: {
			border: '1px solid grey',
			margin: 10,
			padding: 20,
			fontSize: '18px',
		}
	}

	return StyleSheet.create(styles);
}

export default stylesFn