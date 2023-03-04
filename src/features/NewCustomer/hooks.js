import { useDispatch, useSelector } from "react-redux";
import * as actions from './reducers'
import { useEffect } from "react";

export const useUpdateFields = (customerID = null) => {
	const dispatch = useDispatch()
	const fields = useSelector(state => state.customer.form.fields);
	useEffect(() => {
		if (customerID) {
		  dispatch(actions.setForm(customerID))
		}
	  }, [customerID])

	return {
		fields,
		setFormField: (field, value) => {
			return dispatch(actions.setFormField({ field, value }))
		},
	}
}

export const useNewCustomer = () => {
	const dispatch = useDispatch();

	return {
		onSubmit: () => dispatch(actions.createCustomer())
	}
}

export const useEditCustomer = () => {
	const dispatch = useDispatch()
	const status = useEditCustomerStatus()
	
	return {
		status,
		onSubmitEdit: (customerID) => {
			dispatch(actions.editCustomer(customerID))
		}
	}
}

export const useEditCustomerStatus = () => {
	return useSelector(state => state.customer.edit.status)
}