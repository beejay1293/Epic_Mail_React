import authAPI from '../utils/authAPI';
import {
  UNAUTHENTICATED,
  AUTHENTICATING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  AUTHENTICATED,
} from '../constant/actionTypes';

export const authenticating = () => ({
  type: AUTHENTICATING,
});

export const authenticated = () => ({
  type: AUTHENTICATED,
});

export const unauthenticated = () => ({
  type: UNAUTHENTICATED,
});

export const signinSuccess = user => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signinError = error => ({
  type: SIGNIN_ERROR,
  payload: error,
});

export const signupError = error => ({
  type: SIGNUP_ERROR,
  payload: error,
});

export const auth = (type, user, history) => async (dispatch) => {
  try {
    dispatch(authenticating());
    const response = await authAPI(type, user);
    // console.log('....', response.data.data.token);
    localStorage.setItem('jwtToken', response.data.data.token)
    const dispatchType = type === 'signin' ? signinSuccess : signupSuccess;
    history.push('/dashboard');

    dispatch(dispatchType(response.data));
  } catch (err) {
    const errorResponse = err.response;
    console.log(err);
    const dispatchType = type === 'signin' ? signinError : signupError;

    dispatch(dispatchType(errorResponse));
  }
};
