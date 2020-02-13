import { combineReducers} from 'redux';
import manufacturerReducer from './manufacturerReducer';
import vendorReducer from './vendorReducer';
import brandReducer from './brandReducer';
import itemReducer from './itemReducer';
import accountReducer from './accountReducer';
import msgReducer from './msgReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    manufacturer:manufacturerReducer,
    msg:msgReducer,
    error:errorReducer,
    brand:brandReducer,
    account:accountReducer,
    vendor:vendorReducer,
    item:itemReducer
    
   
})