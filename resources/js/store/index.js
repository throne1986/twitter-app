import { applyMiddleware, createStore} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import RootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

persistStore(store);

export default store;
