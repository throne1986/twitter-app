import { combineReducers } from 'redux';
import Auth from './Auth';
import persistStore from './persistStore';
import Comments from './Comments'

const RootReducer = combineReducers({ Auth, Comments, persistStore });

export default RootReducer;
