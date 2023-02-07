import { StyleSheet } from 'react-native'

const stylesFn = () => {

	const styles = {

		cta: {
			backgroundColor: 'blue',
			padding: '15pt 25pt',
			borderRadius: 5,
			width: '90%',
			height: 50,
			margin: 10,
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center'
		},
		buttonText: {
			color: 'white',
			fontSize: '22px',
		}
	}

	return StyleSheet.create(styles);
}

export default stylesFn