import { StyleSheet } from 'react-native'

const stylesFn = () => {

	const styles = {

		cta: {
			backgroundColor: 'blue',
			padding: 25,
			borderRadius: 5,
			width: '90%',
			margin: 10,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center',
		},
		buttonText: {
			color: "white",
			fontSize: 22,
		}
	}

	return StyleSheet.create(styles);
}

export default stylesFn