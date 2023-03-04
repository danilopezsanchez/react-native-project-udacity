import { useDispatch, useSelector } from "react-redux";
import * as actions from './reducers'

export const useUpdateFields = () => {
	const dispatch = useDispatch()
	const fields = useSelector(state => state.customer.form.fields);
  
	return {
	  fields,
	  setFormField: (field, value) => { 
		return dispatch(actions.setFormField({field, value}))
	  },
	}
}

export const useNewCustomer = () => {
	const dispatch = useDispatch();

	return {
		onSubmit: () => dispatch(actions.createCustomer())
	}
}