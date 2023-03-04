import { createSlice } from '@reduxjs/toolkit';

const name = 'customer'

const initialState = {
	form:{
		fields:{
			name: '',
			lastname: '',
			active: '',
			area: '',
			documentID: '',
		}
	}
}

const reducers = {
	createCustomer: (state) => {

	},
	createCustomerResult: (state, { payload }) => {
		state.create.status = status.SUCCESS
		state.list.customers = payload
	},
	createCustomerError: (state, { payload }) => {

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
    setFormField
} = slice.actions

export default slice.reducer