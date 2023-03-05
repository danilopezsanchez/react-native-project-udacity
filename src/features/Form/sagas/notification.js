sendNotification

import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { sendNotification } from '../../../utilities/notifications'

export function* watchSendNotification() {
    yield takeLatest(actions.sendNotification.toString(), takeSendNotification)
}

export function* takeSendNotification() {
    try {
        const result = sendNotification()
    } catch (error) {
		console.log("error:", error)
    }
}