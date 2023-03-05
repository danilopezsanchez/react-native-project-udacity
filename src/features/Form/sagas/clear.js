import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { clear } from '../../../utilities/async_storage'

export function* watchClearStorage() {
    yield takeLatest(actions.clearStorage.toString(), takeClearStorage)
}

export function* takeClearStorage() {
    try {
        const result = yield clear()
		console.log(result)
        yield put(actions.clearStorageResult())
    } catch (error) {
		console.log("error:", error)
    }
}