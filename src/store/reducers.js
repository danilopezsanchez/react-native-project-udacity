import { combineReducers } from "@reduxjs/toolkit";
import customer from '../features/NewCustomer/reducers';

const rootReducer = combineReducers({
	customer,
})

export default rootReducer;