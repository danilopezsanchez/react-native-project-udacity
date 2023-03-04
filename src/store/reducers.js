import { combineReducers } from "@reduxjs/toolkit";
import customer from '../features/Form/reducers';

const rootReducer = combineReducers({
	customer,
})

export default rootReducer;