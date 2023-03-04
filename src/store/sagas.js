import { all } from 'redux-saga/effects';
import customer from '../features/NewCustomer/sagas';

export default function* rootSaga() {
	yield all([
		customer(),
	])
}