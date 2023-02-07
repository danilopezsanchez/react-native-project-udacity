export const useUpdateFields = () => {

	const fields = {
	  name: '',
	  lastname: '',
	  active: '',
	  area: ''
	}
  
	return {
	  fields,
	  setFormField: (field, value) => { 
		console.log(`Updating field ${field} to ${value}`)
		fields[field] = value
	  },
	}
  }