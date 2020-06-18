import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import RootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

persistStore(store);

export default store;
