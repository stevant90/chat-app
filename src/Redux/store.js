import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [thunkMiddleware];


const store  = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;