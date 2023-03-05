
import React, { useEffect, useState } from 'react'
import { Keyboard, TextInput, View, Button, Text } from 'react-native'
import Constants from 'expo-constants'
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications'

export const sendNotification = (user) => {
	if (Platform.OS === 'web'){
		return;
	}
	Keyboard.dismiss()
	const schedulingOptions = {
		content: {
			title: 'Caller reminder',
			body: `Remember call ${user.name} ${user.lastname}`,
			sound: true,
			priority: Notifications.AndroidNotificationPriority.HIGH,
			color: 'blue'
		},
		trigger: {
			seconds: 10,
		},
	}
	// Notifications show only when app is not active.
	// (ie. another app being used or device's screen is locked)
	Notifications.scheduleNotificationAsync(
		schedulingOptions,
	)
}

const handleNotification = () => {
	console.warn('Your notification ran, but won`t show up in the app!')
}

export const notificationCustomer = () => {
	askNotification();

	const listener = Notifications.addNotificationReceivedListener(handleNotification)
	return () => listener.remove()
}

const askNotification = async () => {
	const { status } = await Notifications.requestPermissionsAsync()
	if (Constants.isDevice && status === 'granted')
		console.log('Notification permissions granted.')
}



