import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import combineReducers from '../reducers'

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store;