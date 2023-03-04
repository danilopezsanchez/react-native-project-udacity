import { createSlice } from '@reduxjs/toolkit';
import { PENDING, INPROGRESS, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers'

const name = 'customer'

const initialState = {
	list: {
        customers: [
			{
				id: 2,
				name: 'jose',
				lastname: 'lopez',
				active: 'true',
				area: 'south'
			},
			{
				id: 1,
				name: 'dani',
				lastname: 'lopez',
				active: 'true',
				area: 'north'
			}
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
		}
	},
    error: {
        message: ''
    }
}

const reducers = {
	createCustomer: (state) => {
		state.create.status = REQUESTING
	},
	createCustomerResult: (state, { payload }) => {
		state.create.status = SUCCESS
		state.list.customers = payload
	},
	createCustomerError: (state, { payload }) => {
		state.create.status = ERROR
		state.error.message = payload
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