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
		textField: {
			marginLeft: '5%',
			fontSize: 12,
		},
		inputField: {
			borderWidth: 1,
			borderColor: 'black',
			borderRadius: 4,
			padding: 15,
			margin: '5%',
			fontSize: 16,
		},
		selectField: {
			borderWidth: 1,
			borderColor: 'black',
			borderRadius: 4,
			margin: '5%',
			fontSize: 16,
			color: "red"
		}
	}

	return StyleSheet.create(styles);
}

export default stylesFn