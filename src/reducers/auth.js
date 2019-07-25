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
  isAuthenticated: !!localStorage.getItem('jwtToken'),
  errors: {},
  user: {},
  loading: false,
  working: false,
  name: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        loading: true,
      };
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errors: {},
        loading: false,
      };
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errors: {},
        loading: false,
        name: action.payload.data.lastname,
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
