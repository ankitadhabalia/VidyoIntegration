import { combineReducers } from "redux";
import customerReducer from "./customerReducer";
import authReducer from './authReducer'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    auth: authReducer,
    user: authReducer,
    customerR :  customerReducer,
     form:formReducer
});

export default rootReducer;