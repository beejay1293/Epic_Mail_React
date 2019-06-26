import {
  UNAUTHENTICATED,
  AUTHENTICATING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  AUTHENTICATED,
} from '../constant/actionTypes';

const initialState = {
  isAuthenticated: !!localStorage.getItem('jwToken'),
  errors: {},
  user: {},
  loading: false,
  working: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        loading: true,
      };
    case AUTHENTICATED:
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errors: {},
        loading: false,
      };
    case UNAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: false,
        errors: {},
        loading: false,
      };
    case SIGNIN_ERROR:
    case SIGNUP_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
