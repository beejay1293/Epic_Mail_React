import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { UNAUTHENTICATED } from '../constant/actionTypes';
import authReducer from './auth';

export const history = createBrowserHistory();

const appReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
});


export default (state, action) => {
  if (action.type === UNAUTHENTICATED) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};
