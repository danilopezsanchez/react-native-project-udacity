import { StyleSheet } from 'react-native'

const stylesFn = () => {

	const styles = {
		container: {
			margin: '5%'
		},
		form: {
			height: 25,
			width: '100%'
		},
		inputField: {
			borderWidth: 1,
			borderColor: 'black',
			borderRadius: 4,
			padding: 15,
			margin: '5%'
		}
	}

	return StyleSheet.create(styles);
}

export default stylesFn