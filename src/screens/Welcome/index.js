import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import stylesFn from './styles'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../features/Form/reducers'
import { useEffect } from "react";
import { notificationCustomer } from '../../utilities/notifications'

const Welcome = () => {
	const styles = stylesFn();

	const { navigate } = useNavigation()
	const dispatch = useDispatch();
	const statusClear = useSelector(state => state.customer.clear.status);

	useEffect(()=> {
		notificationCustomer();
	},[])

	useEffect(()=> {
		if(statusClear==='SUCCESS')
			alert("Cleared!")
	}, [statusClear])

	const handleContinue = () =>{
		navigate('ListAreas')
	}

	const handleClear = () => {
		dispatch(actions.clearStorage());
	}

    return (
        <View style={styles.content}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>
			<Button linkActionFunction={handleContinue} textButton='Continue to app' />
			<Button linkActionFunction={handleClear} textButton='Clear storage' />
        </View>
    )
}

export default Welcome