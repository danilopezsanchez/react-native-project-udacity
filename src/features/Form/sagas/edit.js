import {  put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'
import { set } from '../../../utilities/async_storage'
import { sendNotification } from '../../../utilities/notifications'

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditCustomer(action) {
    console.log('Starting fetch request to API -- EDIT')
    const customerID = action.payload

    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const result = customers.map(customer => {
            if (customer.id !== customerID) {
				return customer;
			}	
            return fields;
        })

        // pretend call to API
        yield delay(500)
		yield set('CUSTOMERS_KEY', result);
        yield put(actions.editCustomerResult(result))
		if(fields.reminder){
			sendNotification(fields)
		}
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}

