import reducer, { initialState } from '../reducers/auth';
import {
  UNAUTHENTICATED,
  AUTHENTICATING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  AUTHENTICATED,
} from '../constant/actionTypes.jsx';

describe('test auth reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle AUTHENTICATIN', () => {
    expect(reducer(initialState, { type: AUTHENTICATING })).toMatchSnapshot();
  });


it('should handle AUTHETICATED', () => {
  expect(reducer(initialState, { type: AUTHENTICATED })).toMatchSnapshot();
})

it('should handle SIGNUP_SUCCESS', () => {
   expect(reducer(initialState, { type: SIGNUP_SUCCESS, payload: {data: {lastname: 'ji'}}})).toMatchSnapshot();
})

it('should handle SIGNIN_SUCCESS', () => {
   expect(reducer(initialState, { type: SIGNIN_SUCCESS, payload: {data: {lastname: 'ji'}}})).toMatchSnapshot();
})
it('should handle SINGUP_ERROR', () => {
  expect(reducer(initialState, {
    type: SIGNUP_ERROR
  })).toMatchSnapshot();
})

it('should handle SIGNIN_ERROR', () => {
  expect(reducer(initialState, {
    type: SIGNIN_ERROR
  })).toMatchSnapshot();
})

it('should handle UNAUTHENTICATED', () => {
  expect(reducer(initialState, {
    type: UNAUTHENTICATED
  })).toMatchSnapshot();
})


});