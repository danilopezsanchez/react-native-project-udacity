import { createSlice } from '@reduxjs/toolkit';
import { PENDING, INPROGRESS, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers'

const name = 'customer'

const initialState = {
	list: {
        customers: [
		]
    },
	create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
	form:{
		fields:{
			name: '',
			lastname: '',
			active: '',
			area: '',
			reminder:'',
		}
	},
    error: {
        message: ''
    },
	clear:{
		status: PENDING,
	}
}

const reducers = {
	createCustomer: (state) => {
		state.create.status = REQUESTING
	},
	createCustomerResult: (state, { payload }) => {
		state.create.status = SUCCESS
		state.list.customers = payload
		state.form.fields = initialState.form.fields
	},
	createCustomerError: (state, { payload }) => {
		state.create.status = ERROR
		state.error.message = payload
		state.form.fields = initialState.form.fields
	},
	editCustomer: (state, { payload }) => {
        state.edit.status = REQUESTING
    },
	editCustomerResult: (state, { payload }) => {
        state.edit.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
    },
    editCustomerError: (state, { payload }) => {
        state.edit.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
	setFormField: (state, { payload }) => {
        const current = state.form.fields
        const { field, value } = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },
	setForm: (state, { payload }) => {
        const customer = state.list.customers.find(a => a.id === payload)

        if (customer) {
            state.form.fields = customer
        } else {
            state.error.message = `could not find customer with id: ${payload}`
        }
    },
	setFormEmpty: (state) => {
        state.form.fields = initialState.form.fields
    },
	resetStatus: (state) => {
		state.edit = initialState.edit
		state.create = initialState.create
	},
	loadCustomers: () => {
    },
    loadResult: (state, { payload }) => {
        state.list.customers = payload
    },
	clearStorage: (state) => {
		state.clear.status = PENDING
	},
	clearStorageResult: (state) => {
		state.clear.status = SUCCESS
	},
	sendNotification: () => {
	}
}

const slice = createSlice ({
	name,
	initialState,
	reducers,
})

export const {
    createCustomer,
    createCustomerResult,
    createCustomerError,
	editCustomer,
	editCustomerResult,
	editCustomerError,
    setFormField,
	setForm,
	setFormEmpty,
	resetStatus,
	loadCustomers,
	loadResult,
	clearStorage,
	clearStorageResult,
	sendNotification,
} = slice.actions

export default slice.reducer