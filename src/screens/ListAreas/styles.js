import { StyleSheet } from 'react-native'

const stylesFn = () => {

	const styles = {
		content: {
			alignItems: 'center',
			flex: 1,
			justifyContent: 'center'
		},
	}

	return StyleSheet.create(styles);
}

export default stylesFn