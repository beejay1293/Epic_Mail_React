/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer, { history } from '../reducers';

const enhancers = [];
const middlewares = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);

  if (typeof devToolsExtension === 'function') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);
const store = createStore(rootReducer, composedEnhancers);

export default store;
